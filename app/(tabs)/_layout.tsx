import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "@/constants";

interface ITabIconProps {
  icon: ImageSourcePropType;
  color: string; 
  name: string; 
  focused: boolean; 
}


const TabIcon: React.FC<ITabIconProps> = ({ icon, color, name, focused }) => {
	return (
		<View className="items-center justify-center gap-2">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="w-6 h-6"
			/>
			<Text
				className={`${focused ? "font-isemibold" : "font-iregular"} text-xs`}
				style={{ color: color, width: "100%" }}>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: "#ffffff",
					tabBarInactiveTintColor: "#6c6c76",
					tabBarStyle: {
						backgroundColor: "#1c1d22",
						borderTopColor: "#1c1d22",
						paddingTop: 20,
            height: 76,
					},
				}}>
				<Tabs.Screen
					name="explore"
					options={{
						title: "Explore",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.explore}
								color={color}
								name="Explore"
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="tasks"
					options={{
						title: "Tasks",
						headerShown: false,
            tabBarIconStyle: {
              paddingBottom: 15, 
            },
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.task}
								color={color}
								name="Tasks"
								focused={focused}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="history"
					options={{
						title: "History",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.history}
								color={color}
								name="History"
								focused={focused}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
