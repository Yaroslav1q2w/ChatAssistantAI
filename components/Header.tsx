import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "@/constants";
import GradientBadge from "./GradientBadge";

const Header = () => {
  return (
    <View className="px-4 pt-2 pb-6">
      <View className="flex-row items-center justify-between px-1">
        <TouchableOpacity>
          <Image source={icons.setting} className="w-6 h-6" />
        </TouchableOpacity>


        <View className="pl-10">
          <Text className="text-white text-xl font-imedium">
            Explore
          </Text>
        </View>

        <TouchableOpacity>
          <GradientBadge
            gradientColors={["#448ACA", "#5C34B1"]}
            borderGradientColors={["#59B0FF", "#925FFF"]}
          >
            <View className="flex-row px-2.5 py-1.5">
              <Image source={icons.star} className="w-6 h-6 mr-2" />
              <Text className="text-white text-base font-semibold">10</Text>
            </View>
          </GradientBadge>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
