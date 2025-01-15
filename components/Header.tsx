import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "@/constants";
import GradientBadge from "./GradientBadge";

interface HeaderProps {
  title: string; 
  rightComponent?: React.ReactNode; 
}

const Header: React.FC<HeaderProps> = ({ title, rightComponent }) => {
  return (
    <View className="px-4 pt-2 pb-6">
      <View className="flex-row items-center justify-between px-1">
        <TouchableOpacity>
          <Image source={icons.setting} className="w-6 h-6" />
        </TouchableOpacity>

        <View className="pl-10">
          <Text className="text-white text-xl font-imedium">{title}</Text>
        </View>

        {rightComponent && <View>{rightComponent}</View>}
      </View>
    </View>
  );
};

export default Header;
