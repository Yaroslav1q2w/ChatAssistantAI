import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IGradientBadgeProps {
  children: React.ReactNode;
  gradientColors: [string, string, ...string[]];
  borderGradientColors: [string, string, ...string[]];
}

const GradientBadge: React.FC<IGradientBadgeProps> = ({
  children,
  gradientColors,
  borderGradientColors,
}) => {
  return (
    <LinearGradient
      colors={borderGradientColors}
      start={[0, 0]}
      end={[1, 0]}
      style={{
        padding: 1, 
        borderRadius: 16,
      }}
    >
      <LinearGradient
        colors={gradientColors}
        start={[0, 0]}
        end={[1, 0]}
        style={{
          borderRadius: 16, 
        }}
      >
        <View className="flex-row items-center justify-center">{children}</View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default GradientBadge;
