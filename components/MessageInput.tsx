import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";
import { icons } from "@/constants";
import FormField from "@/components/FormField";
import DynamicButton from "./DynamicButton";
import { useChat } from "@/context/ChatContext";

interface IMessageInputProps {
  isChatScreen?: boolean;
  onSend?: (text: string) => void;
}

const MessageInput: React.FC<IMessageInputProps> = ({ isChatScreen = false, onSend }) => {
  const [text, setText] = useState("");
  const router = useRouter();
  const params = useGlobalSearchParams();
  const { addChat } = useChat(); 


  const handleNavigateToEmptyChat = () => {
    const chatId = `chat-${Date.now()}`;
    addChat(chatId, "New Chat", "Empty", "");
    router.push({
      pathname: "/chat",
      params: {
        chatId,
      },
    });
  };

  const handleSend = () => {
    if (text.trim() && isChatScreen && onSend) {
      onSend(text);
      setText("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} 
    >
      <View
        className="border border-accent rounded-tl-[16px] rounded-tr-[16px] -mx-0.5 border-b-0 pb-5 mt-3"
        onTouchStart={!isChatScreen ? handleNavigateToEmptyChat : undefined} 
      >
        <View className="flex-row items-center px-4 pt-4 gap-2">
          <FormField
            placeholder="Enter text here..."
            icon={icons.chek_icon}
            gradientColors={["#59B0FF", "#925FFF"]}
            containerStyle={{ flex: 1 }}
            value={text}
            onChangeText={setText}
            editable={isChatScreen}
          />

          <DynamicButton
            hasText={!!text}
            onPress={isChatScreen ? handleSend : handleNavigateToEmptyChat}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
