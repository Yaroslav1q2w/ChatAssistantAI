import { icons } from "@/constants";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import GradientBadge from "./GradientBadge";
import { IListItem } from "@/app/(tabs)/explore";

interface IAIListProps {
  title: string;
  data: IListItem[];
  onPress: (item: IListItem) => void; 
}

const AIList: React.FC<IAIListProps> = ({ title, data, onPress }) => {
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
          <TouchableOpacity
            className="rounded-2xl items-center mr-2"
            onPress={() => onPress(item)} 
          >
            <View>
              <View className="bg-accent w-32 h-32 rounded-2xl justify-center items-center">
                <Image source={item.image} className="w-[110] h-[124]" resizeMode="contain" />
              </View>
              <View className="relative bottom-4">
                <GradientBadge
                  gradientColors={["#448ACA", "#5C34B1"]}
                  borderGradientColors={["#59B0FF", "#925FFF"]}
                >
                  <Text className="text-white font-imedium text-xs py-1.5">{item.name}</Text>        
                </GradientBadge>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AIList;
