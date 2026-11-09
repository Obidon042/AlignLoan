import { router } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, ScreenHeader } from "../components/loan-ui";

export default function LoanDisbursementScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Disbursement Preview" />
      <View className="flex-1">
        <View className="mb-4 rounded-xl bg-[#F1F0FF] p-3">
          <Text className="text-xs leading-5 text-[#5B45E7]">
            This is a sample receipt for the UI preview, not a real transaction.
          </Text>
        </View>

        <View className="items-center rounded-3xl bg-white px-5 py-8">
          <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-[#E9F8EF]">
            <Text className="text-3xl font-bold text-[#2FA464]">✓</Text>
          </View>
          <Text className="text-sm font-semibold text-[#77758D]">
            Sample disbursement amount
          </Text>
          <Text className="mt-2 text-3xl font-extrabold text-[#22213D]">
            ₦300,000
          </Text>
          <View className="mt-3 rounded-full bg-[#F1F0FF] px-3 py-1">
            <Text className="text-xs font-bold text-[#5B45E7]">
              Preview only
            </Text>
          </View>
        </View>

        <View className="mt-4 rounded-2xl bg-white px-4">
          <View className="flex-row justify-between border-b border-[#F0EFF5] py-4">
            <Text className="text-sm text-[#77758D]">Transaction reference</Text>
            <Text className="text-sm font-semibold text-[#34334C]">DEMO-000001</Text>
          </View>
          <View className="flex-row justify-between py-4">
            <Text className="text-sm text-[#77758D]">Transaction status</Text>
            <Text className="text-sm font-semibold text-[#34334C]">Not processed</Text>
          </View>
        </View>

        <View className="mt-auto pb-5 pt-6">
          <PrimaryButton
            title="Done"
            onPress={() => router.replace("/(tabs)/loans")}
          />
          <Pressable
            accessibilityRole="button"
            className="mt-4 items-center py-2"
            onPress={() => router.push("/loan-details")}
          >
            <Text className="text-sm font-semibold text-[#5B45E7]">
              View loan preview
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
