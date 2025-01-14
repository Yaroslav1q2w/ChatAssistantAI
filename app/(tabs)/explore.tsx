import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import FormField from "@/components/FormField";
import { icons } from "@/constants";
import { assistants, prompts, advices } from "@/constants/data";
import AIList from "@/components/AIList";
import PromptList from "@/components/PromptList";
import AdviceList from "@/components/AdviceList";
import DynamicButton from "@/components/DynamicButton";


const Explore = () => {
  const [text, setText] = useState("");

  const handlePress = () => {
    if (text) {
      console.log("Send:", text);
      setText(""); 
    } else {
      console.log("Start voice input");
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
        <Header />

        <ScrollView>
          <View className="px-4">
            <FormField
                placeholder="Search"
                icon={icons.search}
              />

              <Banner />

              <AIList title="AI Assistants" data={assistants} />
              <PromptList title="Popular Prompts" data={prompts} />
              <AdviceList title="Advices" data={advices} />

          </View>
          <View className="border border-accent rounded-tl-[16px] rounded-tr-[16px] -mx-0.5 border-b-0 pb-5 mt-3">
            <View className="flex-row items-center px-4 pt-4 gap-2">
              <FormField
                placeholder="Enter text here..."
                icon={icons.chek_icon}
                gradientColors={["#59B0FF", "#925FFF"]}
                containerStyle={{ flex: 1 }}
              />
              <DynamicButton hasText={!!text} onPress={handlePress} />
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
