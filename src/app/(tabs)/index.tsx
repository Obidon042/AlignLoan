import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const quickActions = [
  { title: "Calculator", icon: "⌗", route: "/calculator" as const },
  { title: "My Loans", icon: "₦", route: "/(tabs)/loans" as const },
  { title: "Support", icon: "?", route: "/help-support" as const },
];

export default function HomeTab() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC]" edges={["top"]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Logo and Notification */}
        <View className="mb-6 mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require("../../../assets/images/alignloan-logo.jpg")}
              style={{
                width: 44,
                height: 44,
                resizeMode: "contain",
                borderRadius: 10,
                marginRight: 12,
              }}
            />
            <View>
              <Text className="text-sm text-[#77758D]">Hello, Blessing 👋</Text>
              <Text className="mt-1 text-xl font-extrabold text-[#22213D]">
                Welcome back
              </Text>
            </View>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open notifications"
            className="h-12 w-12 items-center justify-center rounded-full bg-white"
            onPress={() => router.push("/notifications")}
          >
            <Text className="text-lg text-[#0B6623]">🔔</Text>
          </Pressable>
        </View>

        {/* Loan Limit Card — Green Brand */}
        <View className="overflow-hidden rounded-3xl bg-[#0B6623] p-6">
          <View className="absolute -right-7 -top-8 h-36 w-36 rounded-full bg-white/10" />
          <View className="absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-[#DAA520]/20" />
          <Text className="text-sm font-medium text-green-100">Sample loan limit</Text>
          <Text className="mt-2 text-3xl font-extrabold text-white">
            ₦500,000
          </Text>
          <Text className="mt-1 text-xs text-green-100">
            Demo preview · not available funds
          </Text>
          <Pressable
            accessibilityRole="button"
            className="mt-5 self-start rounded-xl bg-white px-5 py-3"
            onPress={() => router.push("/calculator")}
          >
            <Text className="text-sm font-bold text-[#0B6623]">
              Apply for Loan
            </Text>
          </Pressable>
        </View>

        {/* Quick Actions */}
        <View className="mt-7 flex-row items-center justify-between">
          <Text className="text-base font-bold text-[#22213D]">
            Quick actions
          </Text>
        </View>
        <View className="mt-3 flex-row justify-between gap-3">
          {quickActions.map((action) => (
            <Pressable
              accessibilityRole="button"
              className="flex-1 items-center rounded-2xl bg-white px-2 py-4"
              key={action.title}
              onPress={() => router.push(action.route)}
            >
              <View className="mb-2 h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F5E9]">
                <Text className="text-xl font-bold text-[#0B6623]">
                  {action.icon}
                </Text>
              </View>
              <Text className="text-xs font-semibold text-[#4A4861]">
                {action.title}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Verify Identity */}
        <Pressable
          accessibilityRole="button"
          className="mt-6 flex-row items-center rounded-2xl border border-[#C8E6C9] bg-white p-4"
          onPress={() => router.push("/identity-verification")}
        >
          <View className="mr-3 h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5E9]">
            <Text className="text-xl text-[#0B6623]">✓</Text>
          </View>
          <View className="flex-1">
            <Text className="font-bold text-[#34334C]">Verify your identity</Text>
            <Text className="mt-1 text-xs text-[#77758D]">
              Complete verification to continue
            </Text>
          </View>
          <Text className="text-xl text-[#9997AA]">›</Text>
        </Pressable>

        {/* Recent Activity */}
        <View className="mb-3 mt-7 flex-row items-center justify-between">
          <Text className="text-base font-bold text-[#22213D]">
            Recent activity
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/(tabs)/activity")}
          >
            <Text className="text-sm font-semibold text-[#0B6623]">See all</Text>
          </Pressable>
        </View>
        <Pressable
          accessibilityRole="button"
          className="rounded-2xl bg-white p-4"
          onPress={() => router.push("/loan-details")}
        >
          <View className="h-12 flex-row items-center">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#E8F5E9]">
              <Text className="font-bold text-[#0B6623]">₦</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-[#34334C]">
                Loan preview
              </Text>
              <Text className="mt-1 text-xs text-[#9997AA]">
                View sample loan details
              </Text>
            </View>
            <Text className="text-xl text-[#9997AA]">›</Text>
          </View>
        </Pressable>

        {/* Brand Logo Footer */}
        <View className="mt-7 items-center">
          <Image
            source={require("../../../assets/images/alignloan-logo.jpg")}
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              borderRadius: 14,
              opacity: 0.7,
            }}
          />
          <Text className="mt-2 text-[10px] font-bold tracking-[2px] text-[#9997AA]">
            ALIGNLOAN
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
