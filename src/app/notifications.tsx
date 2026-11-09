import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeader } from "../components/loan-ui";

const noticeItems = [
  {
    title: "Repayment reminder",
    detail: "Your sample installment is due on 15 Nov 2026.",
    icon: "◷",
    route: "/repayment-history" as const,
  },
  {
    title: "Loan application",
    detail: "Continue your application preview from where you left off.",
    icon: "₦",
    route: "/(tabs)/loans" as const,
  },
  {
    title: "Welcome to ALIGNLOAN",
    detail: "Explore the loan screens in this interactive demo.",
    icon: "A",
    route: "/(tabs)" as const,
  },
];

export default function NotificationsScreen() {
  const [unread, setUnread] = useState([true, true, false]);

  function openNotice(index: number) {
    setUnread((current) => current.map((isUnread, item) => item === index ? false : isUnread));
    router.push(noticeItems[index].route);
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Notifications" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-5 flex-row items-center justify-between">
          <Text className="text-2xl font-extrabold text-[#22213D]">
            Notifications
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => setUnread([false, false, false])}
          >
            <Text className="text-xs font-semibold text-[#5B45E7]">
              Mark all read
            </Text>
          </Pressable>
        </View>
        <View className="mb-4 rounded-xl bg-[#F1F0FF] p-3">
          <Text className="text-xs leading-5 text-[#5B45E7]">
            These are sample notifications for the UI preview.
          </Text>
        </View>

        <View className="rounded-2xl bg-white px-4">
          {noticeItems.map((notice, index) => (
            <Pressable
              accessibilityRole="button"
              className={`flex-row items-start py-4 ${
                index > 0 ? "border-t border-[#F0EFF5]" : ""
              }`}
              key={notice.title}
              onPress={() => openNotice(index)}
            >
              <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#FFF1EE]">
                <Text className="text-base font-bold text-[#E26A56]">
                  {notice.icon}
                </Text>
              </View>
              <View className="flex-1">
                <View className="flex-row items-center">
                  <Text className="flex-1 text-sm font-bold text-[#34334C]">
                    {notice.title}
                  </Text>
                  {unread[index] ? (
                    <View className="ml-2 h-2 w-2 rounded-full bg-[#5B45E7]" />
                  ) : null}
                </View>
                <Text className="mt-1 text-xs leading-5 text-[#77758D]">
                  {notice.detail}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          className="mt-4 items-center py-3"
          onPress={() => router.push("/notification-settings")}
        >
          <Text className="text-sm font-semibold text-[#5B45E7]">
            Notification settings
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
