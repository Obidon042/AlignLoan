import { router } from "expo-router";
import { Alert, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeader } from "../components/loan-ui";

const installments = [
  { date: "15 Nov 2026", amount: "₦56,000", status: "Upcoming" },
  { date: "15 Oct 2026", amount: "₦56,000", status: "Preview" },
  { date: "15 Sep 2026", amount: "₦56,000", status: "Preview" },
  { date: "15 Aug 2026", amount: "₦56,000", status: "Preview" },
];

export default function RepaymentHistoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Repayment History" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-4 rounded-xl bg-[#F1F0FF] p-3">
          <Text className="text-xs leading-5 text-[#5B45E7]">
            Sample schedule only. No installments have been paid or scheduled.
          </Text>
        </View>

        <View className="mb-4 rounded-2xl bg-white p-4">
          <Text className="text-sm text-[#77758D]">Preview loan</Text>
          <Text className="mt-1 text-xl font-extrabold text-[#22213D]">
            ₦300,000
          </Text>
          <Text className="mt-1 text-xs text-[#77758D]">
            Installment estimate · ₦56,000
          </Text>
        </View>

        <Text className="mb-3 text-base font-bold text-[#22213D]">
          Installments
        </Text>
        <View className="rounded-2xl bg-white px-4">
          {installments.map((installment, index) => (
            <View
              className={`flex-row items-center py-4 ${
                index > 0 ? "border-t border-[#F0EFF5]" : ""
              }`}
              key={installment.date}
            >
              <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#F1F0FF]">
                <Text className="text-base font-bold text-[#5B45E7]">₦</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-[#34334C]">
                  {installment.date}
                </Text>
                <Text className="mt-1 text-xs text-[#77758D]">
                  {installment.status}
                </Text>
              </View>
              <Text className="text-sm font-bold text-[#34334C]">
                {installment.amount}
              </Text>
            </View>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          className="mt-5 h-12 items-center justify-center rounded-2xl bg-[#5B45E7]"
          onPress={() =>
            Alert.alert(
              "Payments not connected",
              "This repayment preview cannot make or record a payment.",
              [
                { text: "OK", style: "cancel" },
                { text: "Repayment options", onPress: () => router.push("/repayment") },
              ],
            )
          }
        >
          <Text className="font-bold text-white">Pay Now</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
