
import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tabItems = [
  {
    name: "index",
    title: "Home",
    icon: "home",
    activeIcon: "home",
  },
  {
    name: "loans",
    title: "Loans",
    icon: "wallet-outline",
    activeIcon: "wallet",
  },
  {
    name: "activity",
    title: "Activity",
    icon: "receipt-outline",
    activeIcon: "receipt",
  },
  {
    name: "profile",
    title: "Profile",
    icon: "person-circle-outline",
    activeIcon: "person-circle",
  },
] as const;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0B6623",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
          marginTop: 0,
          marginBottom: Platform.OS === "ios" ? 0 : 6,
          letterSpacing: 0.3,
        },
        tabBarStyle: {
          height: Platform.OS === "ios" ? 85 : 85,
          paddingTop: 3,
          paddingBottom: Platform.OS === "ios" ? 15 : 3,
          marginBottom: Platform.OS === "ios" ? 0 : 15,
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          backgroundColor: "#FFFFFF",
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.06,
          shadowRadius: 8,
        },
        tabBarIconStyle: {
          marginTop: 0,
        },
      }}
    >
      {tabItems.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: item.title,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 30,
                  borderRadius: 12,
                  backgroundColor: focused
                    ? "rgba(11, 102, 35, 0.1)"
                    : "transparent",
                  transform: [{ translateY: -1 }],
                }}
              >
                <Ionicons
                  name={focused ? item.activeIcon : item.icon}
                  size={23}
                  color={color}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
