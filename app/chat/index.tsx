import { useState } from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import Header from "@/components/Header";
import { icons } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import MessageInput from "@/components/MessageInput";

const ChatScreen = () => {
  const { message } = useGlobalSearchParams();

  const [messages, setMessages] = useState([
    { id: 1, text: message || "Welcome to the chat!", isUser: false },
  ]);

  const handleSend = (text: string) => {
    if (text.trim()) {
      setMessages((prev) => [
        { id: Date.now(), text, isUser: true }, 
        ...prev,
      ]);
    }
  };

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
        data={messages}
        inverted 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.isUser ? "flex-end" : "flex-start",
              marginVertical: 6,
              maxWidth: "90%",
              borderRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomLeftRadius: item.isUser ? 16 : 4,
              borderBottomRightRadius: item.isUser ? 4 : 16,
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
              <Text className="font-iregular text-base text-white">{item.text}</Text>
            </LinearGradient>
          </View>
        )}
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
