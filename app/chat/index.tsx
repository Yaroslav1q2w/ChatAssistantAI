import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Chat() {
  return (
    <View className="bg-primary h-full">
      {/* Верхній бар */}
      <View className="flex-row justify-between items-center px-4 py-4 bg-gray-dark">
        <TouchableOpacity>
          <Text className="text-white font-pmedium">Back</Text>
        </TouchableOpacity>
        <Text className="text-white font-pbold text-lg">Chat</Text>
        <TouchableOpacity>
          <Text className="text-white font-pmedium">More</Text>
        </TouchableOpacity>
      </View>

      {/* Секція чату */}
      <ScrollView className="flex-1 px-4">
        {/* Приклад повідомлення */}
        <View className="bg-gray-light p-4 rounded-lg mb-4">
          <Text className="text-white font-pregular">Welcome! How can I assist you today?</Text>
        </View>
      </ScrollView>

      {/* Поле вводу */}
      <View className="flex-row items-center px-4 py-2 bg-gray-dark">
        <TextInput
          placeholder="Type a message..."
          placeholderTextColor="#6E6E80"
          className="flex-1 bg-gray-dark p-4 rounded-lg text-white"
        />
        <TouchableOpacity className="ml-2 p-4 bg-secondary rounded-lg">
          <Text className="text-white">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
