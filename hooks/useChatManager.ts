import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  type: string; 
}

const useChatManager = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const loadChats = async () => {
      const storedChats = await AsyncStorage.getItem("chats");
      if (storedChats) {
        setChats(JSON.parse(storedChats));
      }
    };
    loadChats();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const addChat = (title: string, type: string, initialMessage: string) => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title,
      type,
      messages: [{ id: Date.now(), text: initialMessage, isUser: false }],
    };
    setChats((prev) => [newChat, ...prev]);
  };

  const addMessageToChat = (chatId: string, text: string, isUser: boolean) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [{ id: Date.now(), text, isUser }, ...chat.messages],
            }
          : chat
      )
    );
  };

  return { chats, addChat, addMessageToChat };
};

export default useChatManager;
