import { useState, useEffect } from "react";
import { View, FlatList, SafeAreaView, TouchableOpacity, Image, Text, Keyboard } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import Header from "@/components/Header";
import { icons } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import MessageInput from "@/components/MessageInput";
import { useChat } from "@/context/ChatContext";
import AnimatedTyping from "@/components/AnimatedTyping";

const ChatScreen = () => {
  const { chatId } = useGlobalSearchParams();
  const { chats, addMessageToChat } = useChat();

  const chat = chats.find((item) => item.id === chatId);

  const [animatedMessages, setAnimatedMessages] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (chat && chat.messages.length === 1) {
      setAnimatedMessages(new Set([chat.messages[0].id]));
    } else {
      setAnimatedMessages(new Set());
    }
  }, [chatId]);

  const handleSend = (text: string) => {
    if (text.trim() && chat) {
      addMessageToChat(chat.id, text, true);

      const placeholderMessages = [
        "Hello! How can I assist you today?",
        "I'm here to help you.",
        "Let's find the best solution together.",
        "Can I provide you with some advice?",
        "Feel free to ask me anything.",
      ];

      const botMessageText =
        placeholderMessages[Math.floor(Math.random() * placeholderMessages.length)];

      setTimeout(() => {
        const botMessageId = Date.now();
        addMessageToChat(chat.id, botMessageText, false);

        setAnimatedMessages((prev) => {
          const newSet = new Set(prev);
          newSet.add(botMessageId);
          return newSet;
        });
      }, 500);
    }
  };

  if (!chat) {
    return (
      <SafeAreaView className="flex-1 bg-primary justify-center items-center">
        <Text className="text-white text-lg">Chat not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Header
        title="Chat"
        rightComponent={
          <View className="flex-row gap-4">
            <TouchableOpacity>
              <Image source={icons.menu} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={icons.share} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        }
      />

      <FlatList
        data={chat?.messages || []}
        inverted
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          item.text.trim() ? (
            <View
              style={{
                alignSelf: item.isUser ? "flex-end" : "flex-start",
                marginVertical: 6,
                maxWidth: "90%",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={item.isUser ? ["#448ACA", "#5C34B1"] : ["#333338", "#333338"]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                }}
              >
                {animatedMessages.has(item.id) ? (
                  <AnimatedTyping
                    className="font-iregular text-base text-white"
                    text={[item.text]}
                  />
                ) : (
                  <Text className="font-iregular text-base text-white">{item.text}</Text>
                )}
              </LinearGradient>
            </View>
          ) : null
        }
        contentContainerStyle={{ padding: 16 }}
      />

      <MessageInput
        isChatScreen
        onSend={handleSend}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
