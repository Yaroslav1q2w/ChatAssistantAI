import { Redirect } from "expo-router";
import { View, ActivityIndicator, Text } from "react-native";

export default function App() {
  return (
    <View className="bg-primary items-center justify-center flex-1">
      <Text className="text-2xl mb-5 font-ibold text-white">Welcome</Text>
      <ActivityIndicator size="large" color="#ffffff" />
      <Redirect href="/(tabs)/explore" />
    </View>
  );
}