import { router } from "expo-router";
import { Alert, Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileItems = [
  { title: "Personal Information", icon: "♙", route: "/personal-information" as const },
  { title: "Change Password", icon: "⌑", route: "/change-password" as const },
  { title: "Notification Settings", icon: "🔔", route: "/notification-settings" as const },
  { title: "Help & Support", icon: "?", route: "/help-support" as const },
];

export default function ProfileTab() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top"]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header with logo */}
        <View className="mb-6 mt-6 flex-row items-center">
          <Image
            source={require("../../../assets/images/alignloan-logo.jpg")}
            style={{
              width: 36,
              height: 36,
              resizeMode: "contain",
              borderRadius: 8,
              marginRight: 10,
            }}
          />
          <Text className="text-2xl font-extrabold text-[#22213D]">
            Profile
          </Text>
        </View>

        <View className="mb-5 flex-row items-center rounded-2xl bg-white p-4">
          <View className="mr-3 h-14 w-14 items-center justify-center rounded-full bg-[#E8F5E9]">
            <Text className="text-xl font-bold text-[#0B6623]">BO</Text>
          </View>
          <View className="flex-1">
            <Text className="text-base font-bold text-[#34334C]">
              Blessing Okafor
            </Text>
            <Text className="mt-1 text-xs text-[#77758D]">
              blessing.okafor@example.com
            </Text>
          </View>
          <Text className="text-xl text-[#9997AA]">›</Text>
        </View>

        <View className="rounded-2xl bg-white px-4">
          {profileItems.map((item, index) => (
            <Pressable
              accessibilityRole="button"
              className={`flex-row items-center py-4 ${
                index > 0 ? "border-t border-[#F0EFF5]" : ""
              }`}
              key={item.title}
              onPress={() => router.push(item.route)}
            >
              <View className="mr-3 h-9 w-9 items-center justify-center rounded-xl bg-[#E8F5E9]">
                <Text className="text-base font-bold text-[#0B6623]">
                  {item.icon}
                </Text>
              </View>
              <Text className="flex-1 text-sm font-semibold text-[#34334C]">
                {item.title}
              </Text>
              <Text className="text-xl text-[#9997AA]">›</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          className="mt-4 flex-row items-center rounded-2xl bg-white p-4"
          onPress={() =>
            Alert.alert(
              "Demo mode",
              "No account is signed in. Authentication and sign-out will be available when connected.",
              [{ text: "OK" }, { text: "Go to login", onPress: () => router.replace("/login") }],
            )
          }
        >
          <Text className="mr-3 text-lg font-bold text-[#E45656]">↪</Text>
          <Text className="flex-1 text-sm font-semibold text-[#E45656]">
            Log Out
          </Text>
          <Text className="text-xl text-[#9997AA]">›</Text>
        </Pressable>

        {/* Footer logo */}
        <View className="mt-6 items-center">
          <Image
            source={require("../../../assets/images/alignloan-logo.jpg")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 12,
              opacity: 0.6,
            }}
          />
          <Text className="mt-2 text-center text-xs text-[#9997AA]">
            Profile shown for design preview
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
