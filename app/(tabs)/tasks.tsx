import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Tasks = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="px-4 justify-center items-center">
        <Text className='text-white text-xl font-imedium'>
          Tasks
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Tasks

const styles = StyleSheet.create({})