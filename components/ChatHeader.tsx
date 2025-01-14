import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChatHeader = () => {
  return (
    <View className="flex-row justify-between items-center px-4 py-2 bg-gray-dark">
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;
