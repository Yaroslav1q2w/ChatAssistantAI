import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import FormField from "@/components/FormField";
import { icons } from "@/constants";
import { assistants, prompts, advices } from "@/constants/data";
import AIList from "@/components/AIList";
import PromptList from "@/components/PromptList";
import AdviceList from "@/components/AdviceList";
import GradientBadge from "@/components/GradientBadge";
import { useChat } from "@/context/ChatContext";
import MessageInput from "@/components/MessageInput";
import { useRouter } from "expo-router";

export interface IListItem {
  description?: string;
  id: string;
  name: string;
  image: any;
}

const Explore = () => {
  const router = useRouter();
  const { addChat } = useChat();

  const handleCreateChat = (item: IListItem, type: string) => {
    let initialMessage = "";
  
    switch (type) {
      case "AI":
        initialMessage = `Hi! I’m ${item.name}, your AI assistant. How can I help you today?`;
        break;
      case "Prompt":
        initialMessage = item.description || "";
        break;
      case "Advice":
        initialMessage = item.name;
        break;
      default:
        initialMessage = "Hello! How can I assist you?";
    }
  
    const chatId = item.id || `chat-${Date.now()}`;
  
    addChat(chatId, item.name, type, initialMessage);
  
    router.push({
      pathname: "/chat",
      params: { chatId },
    });
  };
  

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

  return (
    <SafeAreaView className="bg-primary flex-1">
      <Header
        title="Explore"
        rightComponent={
          <GradientBadge
            gradientColors={["#448ACA", "#5C34B1"]}
            borderGradientColors={["#59B0FF", "#925FFF"]}
          >
            <View className="flex-row px-2.5 py-1.5">
              <Image source={icons.star} className="w-6 h-6 mr-2" />
              <Text className="text-white text-base font-semibold">10</Text>
            </View>
          </GradientBadge>
        }
      />

      <ScrollView>
        <View className="px-4">
          <FormField
            placeholder="Search"
            icon={icons.search}
            onPress={handleNavigateToEmptyChat}
            editable={false}
          />

          <Banner />

          <AIList
            title="AI Assistants"
            data={assistants}
            onPress={(item) => handleCreateChat(item, "AI")}
          />
          <PromptList
            title="Popular Prompts"
            data={prompts}
            onPress={(item) => handleCreateChat(item, "Prompt")}
          />
          <AdviceList
            title="Advices"
            data={advices}
            onPress={(item) => handleCreateChat(item, "Advice")}
          />
        </View>

        <MessageInput />

        <StatusBar barStyle="light-content"/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
