import { router } from "expo-router";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, ScreenHeader } from "../components/loan-ui";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between border-b border-[#F0EFF5] py-3">
      <Text className="text-sm text-[#77758D]">{label}</Text>
      <Text className="text-sm font-semibold text-[#34334C]">{value}</Text>
    </View>
  );
}

export default function LoanDetailsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Loan Details" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-4 rounded-xl bg-[#E8F5E9] p-3">
          <Text className="text-xs leading-5 text-[#0B6623]">
            Sample loan preview. No loan has been approved or disbursed.
          </Text>
        </View>

        <View className="rounded-3xl bg-[#0B6623] p-5">
          <Text className="text-sm font-medium text-green-100">
            Preview loan amount
          </Text>
          <Text className="mt-2 text-3xl font-extrabold text-white">₦300,000</Text>
          <View className="mt-4 self-start rounded-full bg-white/15 px-3 py-1">
            <Text className="text-xs font-semibold text-white">Preview only</Text>
          </View>
        </View>

        <View className="mt-4 rounded-2xl bg-white px-4">
          <Text className="pt-4 text-base font-bold text-[#34334C]">
            Loan summary
          </Text>
          <DetailRow label="Loan amount" value="₦300,000" />
          <DetailRow label="Monthly installment" value="₦56,000" />
          <DetailRow label="Repayment term" value="6 months" />
          <DetailRow label="Next due date" value="15 Nov 2026" />
          <DetailRow label="Status" value="Demo preview" />
        </View>

        <Pressable
          accessibilityRole="button"
          className="mt-4 flex-row items-center rounded-2xl bg-white p-4"
          onPress={() => router.push("/repayment-history")}
        >
          <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5E9]">
            <Text className="text-lg font-bold text-[#0B6623]">↻</Text>
          </View>
          <Text className="flex-1 font-semibold text-[#34334C]">
            Repayment schedule
          </Text>
          <Text className="text-xl text-[#9997AA]">›</Text>
        </Pressable>

        <View className="mt-6">
          <PrimaryButton
            title="View disbursement receipt"
            onPress={() => router.push("/loan-disbursement")}
          />
        </View>
        <Pressable
          accessibilityRole="button"
          className="mt-4 h-12 items-center justify-center rounded-2xl border border-[#DAD7F6] bg-white"
          onPress={() => router.push("/repayment")}
        >
          <Text className="font-bold text-[#5B45E7]">Explore repayment options</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
