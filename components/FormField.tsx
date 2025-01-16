import { useState } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "@/constants";

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
  value,
  onChangeText,
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

  const handleClearText = () => {
    if (onChangeText) {
      onChangeText("");
    }
  };

  const shouldShowIcon = !value || value.length === 0; 

  return (
    <Wrapper {...(wrapperProps as any)}>
      <View className="flex-row items-center bg-accent rounded-2xl px-3 pb-1 relative">
        {shouldShowIcon && icon && (
          <Image source={icon} className="w-6 h-6 pt-0.5" />
        )}
        <TextInput
          className="flex-1 text-white px-4 pr-5 py-3 text-base w-full max-h-[100px] text-top"
          placeholderTextColor="#93939F"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline
          {...props}
        />
        {value && value.length > 0 && (
          <TouchableOpacity
            onPress={handleClearText}
            className="absolute right-3 bottom-3"
          >
            <Image source={icons.close} className="w-6 h-6 tint-white" />
          </TouchableOpacity>
        )}
      </View>
    </Wrapper>
  );
};

export default FormField;
