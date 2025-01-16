import { useRef, useState, useEffect } from "react";
import { Text, TextStyle } from "react-native";

interface AnimatedTypingProps {
  text: string[]; 
  onComplete?: () => void; 
  className?: string;
}

interface Timeouts {
  cursorTimeout?: NodeJS.Timeout | null;
  typingTimeout?: NodeJS.Timeout | null;
  firstNewLineTimeout?: NodeJS.Timeout | null;
  secondNewLineTimeout?: NodeJS.Timeout | null;
}

const AnimatedTyping: React.FC<AnimatedTypingProps> = ({ text, onComplete, className }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [cursorColor, setCursorColor] = useState<string>("transparent");
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);

  const timeouts = useRef<Timeouts>({
    cursorTimeout: null,
    typingTimeout: null,
    firstNewLineTimeout: null,
    secondNewLineTimeout: null,
  });

  const textRef = useRef(displayedText);
  textRef.current = displayedText;

  const cursorColorRef = useRef(cursorColor);
  cursorColorRef.current = cursorColor;

  const messageIndexRef = useRef(messageIndex);
  messageIndexRef.current = messageIndex;

  const textIndexRef = useRef(textIndex);
  textIndexRef.current = textIndex;

  const typingAnimation = () => {
    if (textIndexRef.current < text[messageIndexRef.current]?.length) {
      setDisplayedText(
        textRef.current + text[messageIndexRef.current].charAt(textIndexRef.current)
      );
      setTextIndex((prev) => prev + 1);

      timeouts.current.typingTimeout = setTimeout(typingAnimation, 50);
    } else if (messageIndexRef.current + 1 < text.length) {
      setMessageIndex((prev) => prev + 1);
      setTextIndex(0);

      timeouts.current.firstNewLineTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
      }, 120);

      timeouts.current.secondNewLineTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
      }, 200);

      timeouts.current.typingTimeout = setTimeout(typingAnimation, 280);
    } else {
      clearInterval(timeouts.current.cursorTimeout!);
      setCursorColor("transparent");

      if (onComplete) {
        onComplete();
      }
    }
  };

  const cursorAnimation = () => {
    setCursorColor((prev) => (prev === "transparent" ? "#fff" : "transparent"));
  };

  useEffect(() => {
    timeouts.current.typingTimeout = setTimeout(typingAnimation, 500);
    timeouts.current.cursorTimeout = setInterval(cursorAnimation, 250);

    return () => {
      clearTimeout(timeouts.current.typingTimeout!);
      clearTimeout(timeouts.current.firstNewLineTimeout!);
      clearTimeout(timeouts.current.secondNewLineTimeout!);
      clearInterval(timeouts.current.cursorTimeout!);
    };
  }, []);

  return (
    <Text className={className}>
      {displayedText}
      <Text style={{ color: cursorColor }}>|</Text>
    </Text>
  );
};

export default AnimatedTyping;
