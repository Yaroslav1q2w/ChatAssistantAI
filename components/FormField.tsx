import { View, TextInput, TextInputProps, Image, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IFormFieldProps extends TextInputProps {
  gradientColors?: [string, string]; 
  placeholderTextColor?: string;
  placeholder: string;
  icon?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
}

const FormField: React.FC<IFormFieldProps> = ({
  gradientColors,
  placeholder,
  icon,
  containerStyle,
  ...props 
}) => {
  const Wrapper = gradientColors ? LinearGradient : View;

  const wrapperProps = gradientColors
    ? {
        colors: gradientColors as [string, string],
        start: [0, 0] as [number, number],
        end: [1, 0] as [number, number],
        style: [
          {
            borderRadius: 15,
            padding: 1,
          },
          containerStyle,
        ],
      }
    : { style: containerStyle };

  return (
    <Wrapper {...(wrapperProps as any)}>
      <View className="flex-row items-center bg-accent rounded-2xl px-4 py-2">
        {icon && <Image source={icon} className="w-6 h-6" />}
        <TextInput
          className="flex-1 text-white py-3 px-4 text-base w-full"
          placeholderTextColor="#93939F"
          placeholder={placeholder}
          {...props}
        />
      </View>
    </Wrapper>
  );
};

export default FormField;
