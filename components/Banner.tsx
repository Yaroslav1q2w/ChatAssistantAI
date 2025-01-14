import { View, Text, Image } from "react-native";
import GradientBadge from "./GradientBadge";
import { images } from "@/constants";

const Banner = () => {
  return (
    <View className="rounded-lg mt-4 relative">
      <GradientBadge
        gradientColors={["#4A33A8", "#3354AB"]}
        borderGradientColors={["#59B0FF", "#925FFF"]}
      >
        <View className="flex-row items-center justify-start px-4 py-5">
          <View className="flex-1">
            <Text className="text-white text-base font-imedium">
              Start Your Free 3-Day Premium
            </Text>
            <Text className="text-white text-sm mt-0.5 font-iregular">
              Click to get started now.
            </Text>
          </View>

          <View>
            <Image
              source={images.gift}
              className="w-24 h-24 absolute -right-4 -top-11 z-10"
              resizeMode="contain"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            />
            <Image
              source={images.gift} 
              className="absolute w-16 h-16 -top-4 right-16 opacity-40"
              resizeMode="contain"
            />
          </View>
        </View>
      </GradientBadge>
    </View>
  );
};

export default Banner;
