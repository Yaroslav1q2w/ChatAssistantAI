import { createContext, useContext, useState } from "react";

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

interface ChatContextType {
  chats: Chat[];
  addChat: (id: string, title: string, type: string, initialMessage: string) => void;
  addMessageToChat: (chatId: string, text: string, isUser: boolean) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chats, setChats] = useState<Chat[]>([]);

  const addChat = (id: string, title: string, type: string, initialMessage: string) => {
    const existingChat = chats.find((chat) => chat.id === id);
    if (existingChat) {
      return; 
    }

    const newChat: Chat = {
      id,
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
              messages: [{ id: Date.now(), text, isUser }, ...chat.messages, ],
            }
          : chat
      )
    );
  };

  return (
    <ChatContext.Provider value={{ chats, addChat, addMessageToChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;