import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "@/constants";

interface IListItem {
  id: string;
  name: string;
  description: string;
  image: any;
  gradientColors: string[];
}

interface IPromptListProps {
  title: string;
  data: IListItem[];
  onPress: (item: IListItem) => void; 
}

const PromptList: React.FC<IPromptListProps> = ({ title, data, onPress }) => {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center pb-2">
        <Text className="text-white text-xl font-imedium">{title}</Text>
        <View className="flex-row items-center gap-3">
          <Text className="text-white text-sm">See All</Text>
          <Image source={icons.arrow} className="w-1.5 h-3 mr-2" />
        </View>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity className="mr-2" onPress={() => onPress(item)} >
            <LinearGradient
              colors={item.gradientColors} 
              style={{
                borderRadius: 16,
                padding: 1, 
              }}
            >
              <View className="bg-accent p-3 rounded-[16] w-[169] h-[116]">
                <Image source={item.image} className="w-8 h-8"/>
                <Text className="text-white font-isemibold text-sm pt-2">{item.name}</Text>
                <Text className="text-[#CBCBD7] text-xs pt-1">{item.description}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PromptList;
