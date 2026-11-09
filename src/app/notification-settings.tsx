import { useState } from "react";
import { Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeader } from "../components/loan-ui";

const settingOptions = [
  { title: "Repayment reminders", detail: "Due dates and payment updates" },
  { title: "Loan updates", detail: "Application and loan status changes" },
  { title: "Product news", detail: "Tips, offers and service announcements" },
];

export default function NotificationSettingsScreen() {
  const [enabled, setEnabled] = useState([true, true, false]);

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Notification Settings" />
      <Text className="mb-2 text-2xl font-extrabold text-[#22213D]">
        Notification Settings
      </Text>
      <Text className="mb-5 text-sm leading-5 text-[#77758D]">
        Choose the updates you want to see in this preview.
      </Text>
      <View className="rounded-2xl bg-white px-4">
        {settingOptions.map((option, index) => (
          <View
            className={`flex-row items-center py-4 ${
              index > 0 ? "border-t border-[#F0EFF5]" : ""
            }`}
            key={option.title}
          >
            <View className="flex-1 pr-3">
              <Text className="text-sm font-bold text-[#34334C]">
                {option.title}
              </Text>
              <Text className="mt-1 text-xs text-[#77758D]">
                {option.detail}
              </Text>
            </View>
            <Pressable
              accessibilityRole="switch"
              accessibilityState={{ checked: enabled[index] }}
              accessibilityLabel={option.title}
              className={`h-7 w-12 justify-center rounded-full px-1 ${
                enabled[index] ? "bg-[#5B45E7]" : "bg-[#D8D6E1]"
              }`}
              onPress={() =>
                setEnabled((current) =>
                  current.map((value, item) =>
                    item === index ? !value : value,
                  ),
                )
              }
            >
              <View
                className={`h-5 w-5 rounded-full bg-white ${
                  enabled[index] ? "self-end" : "self-start"
                }`}
              />
            </Pressable>
          </View>
        ))}
      </View>
      <View className="mt-4 rounded-xl bg-[#F1F0FF] p-3">
        <Text className="text-xs leading-5 text-[#5B45E7]">
          These preferences are temporary and will reset when the app restarts.
          Saved preferences require an account service.
        </Text>
      </View>
    </SafeAreaView>
  );
}
