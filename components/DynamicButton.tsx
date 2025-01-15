import { TouchableOpacity, Image, View } from "react-native";
import GradientBadge from "./GradientBadge";
import { icons } from "@/constants";

interface IDynamicButtonProps {
  hasText: boolean; 
  onPress: () => void; 
}

const DynamicButton: React.FC<IDynamicButtonProps> = ({ hasText, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
    >
      <GradientBadge
        gradientColors={["#448ACA", "#5C34B1"]}
        borderGradientColors={["#59B0FF", "#925FFF"]}
      >
        <View className="w-14 h-14 items-center justify-center">
          <Image
            source={ hasText ? icons.send : icons.microphone }
            className="w-4 h-5"
          />
        </View>
      </GradientBadge>
    </TouchableOpacity>
  );
};

export default DynamicButton;