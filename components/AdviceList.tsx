import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { icons } from "@/constants";

interface IListItem {
  id: string;
  name: string;
  image: any;
}

interface IAdviceListProps {
  title: string;
  data: IListItem[];
}

const AdviceList: React.FC<IAdviceListProps> = ({ title, data }) => {
  const chunkData = (array: IListItem[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const groupedData = chunkData(data, 3);

  return (
    <View className="mt-3">
      <View className="flex-row justify-between items-center pb-2">
        <Text className="text-white text-xl font-imedium">{title}</Text>
        <View className="flex-row items-center gap-3">
          <Text className="text-white text-sm">See All</Text>
          <Image source={icons.arrow} className="w-1.5 h-3 mr-2" />
        </View>
      </View>
      <FlatList
        data={groupedData} 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `row-${index}`}
        renderItem={({ item }) => (
          <View className="mr-2">
            {item.map((rowItem) => (
              <TouchableOpacity
                key={rowItem.id}
                className="bg-accent rounded-lg p-3 w-[346] mb-2"
              >
                <View className="flex-row items-center">
                  <Image source={rowItem.image} className="w-8 h-8 mr-2" />
                  <Text className="text-white text-xs w-[250] font-iregular">{rowItem.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default AdviceList;
