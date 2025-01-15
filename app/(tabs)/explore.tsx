import { useRouter } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import FormField from "@/components/FormField";
import { icons } from "@/constants";
import { assistants, prompts, advices } from "@/constants/data";
import AIList, { IListItem } from "@/components/AIList";
import PromptList from "@/components/PromptList";
import AdviceList from "@/components/AdviceList";
import MessageInput from "@/components/MessageInput";
import GradientBadge from "@/components/GradientBadge";

const Explore = () => {
  const router = useRouter();

  const handleCreateChat = (item: IListItem) => {
    router.push({
      pathname: "/chat",
      params: {
        type: "AI",
        message: `Hello! I am ${item.name}`,
      },
    });
  };

  const handleNavigateToEmptyChat = () => {
    router.push({
      pathname: "/chat",
      params: {
        type: "Empty",
        message: "",
      },
    });
  };

  return (
    <SafeAreaView className="bg-primary h-full">
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

          <AIList title="AI Assistants" data={assistants} onPress={handleCreateChat} />
          <PromptList title="Popular Prompts" data={prompts} />
          <AdviceList title="Advices" data={advices} />
        </View>

        <MessageInput />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
