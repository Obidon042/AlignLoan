import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoansTab() {
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
          <View>
            <Text className="text-2xl font-extrabold text-[#22213D]">My Loans</Text>
            <Text className="mt-1 text-sm text-[#77758D]">
              Loan details and repayment schedule
            </Text>
          </View>
        </View>

        <View className="mb-4 rounded-xl bg-[#E8F5E9] p-3">
          <Text className="text-xs leading-5 text-[#0B6623]">
            Sample preview only. This is not an approved or disbursed loan.
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          className="rounded-3xl bg-[#0B6623] p-5"
          onPress={() => router.push("/loan-details")}
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-semibold text-green-100">
              Preview Loan
            </Text>
            <View className="rounded-full bg-white/15 px-3 py-1">
              <Text className="text-xs font-semibold text-white">Sample</Text>
            </View>
          </View>
          <Text className="mt-4 text-3xl font-extrabold text-white">₦300,000</Text>
          <View className="mt-5 flex-row items-center justify-between border-t border-white/20 pt-4">
            <View>
              <Text className="text-xs text-green-100">Next payment</Text>
              <Text className="mt-1 text-sm font-bold text-white">₦56,000</Text>
            </View>
            <Text className="text-xl text-white">›</Text>
          </View>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          className="mt-4 flex-row items-center rounded-2xl bg-white p-4"
          onPress={() => router.push("/repayment-history")}
        >
          <View className="mr-3 h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5E9]">
            <Text className="text-xl font-bold text-[#0B6623]">↻</Text>
          </View>
          <Text className="flex-1 font-semibold text-[#34334C]">
            Repayment History
          </Text>
          <Text className="text-xl text-[#9997AA]">›</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          className="mt-4 h-12 items-center justify-center rounded-2xl border border-[#C8E6C9] bg-white"
          onPress={() => router.push("/calculator")}
        >
          <Text className="font-bold text-[#0B6623]">Calculate another loan</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          className="mt-3 items-center py-3"
          onPress={() => router.push("/loan-disbursement")}
        >
          <Text className="text-xs font-semibold text-[#77758D]">
            View disbursement receipt preview
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
