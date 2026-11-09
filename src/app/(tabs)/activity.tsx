import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const activityItems = [
  {
    title: "Loan disbursement",
    detail: "Preview loan · ₦300,000",
    date: "Today",
    icon: "₦",
    route: "/loan-details" as const,
  },
  {
    title: "Repayment history",
    detail: "View installments and due dates",
    date: "",
    icon: "↻",
    route: "/repayment-history" as const,
  },
];

export default function ActivityTab() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top"]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-6 mt-6 flex-row items-center justify-between">
          <View className="flex-row items-center">
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
            <View>
              <Text className="text-2xl font-extrabold text-[#22213D]">
                Activity
              </Text>
              <Text className="mt-1 text-sm text-[#77758D]">
                Your loan updates and payments
              </Text>
            </View>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open notifications"
            className="h-11 w-11 items-center justify-center rounded-full bg-white"
            onPress={() => router.push("/notifications")}
          >
            <Text className="text-xl text-[#0B6623]">🔔</Text>
          </Pressable>
        </View>

        <View className="mb-4 rounded-xl bg-[#E8F5E9] p-3">
          <Text className="text-xs leading-5 text-[#0B6623]">
            Preview activity only. No loan or payment has been processed.
          </Text>
        </View>

        <Text className="mb-3 text-base font-bold text-[#22213D]">
          Recent activity
        </Text>
        <View className="rounded-2xl bg-white px-4">
          {activityItems.map((item, index) => (
            <Pressable
              accessibilityRole="button"
              className={`flex-row items-center py-4 ${
                index > 0 ? "border-t border-[#F0EFF5]" : ""
              }`}
              key={item.title}
              onPress={() => router.push(item.route)}
            >
              <View className="mr-3 h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5E9]">
                <Text className="text-xl font-bold text-[#0B6623]">
                  {item.icon}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-bold text-[#34334C]">
                  {item.title}
                </Text>
                <Text className="mt-1 text-xs text-[#77758D]">
                  {item.detail}
                </Text>
              </View>
              <View className="items-end">
                {item.date ? (
                  <Text className="text-xs text-[#9997AA]">{item.date}</Text>
                ) : null}
                <Text className="mt-1 text-xl text-[#9997AA]">›</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          className="mt-4 flex-row items-center justify-between rounded-2xl bg-white p-4"
          onPress={() => router.push("/repayment-history")}
        >
          <Text className="font-semibold text-[#34334C]">
            See all repayment history
          </Text>
          <Text className="text-xl text-[#9997AA]">›</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
