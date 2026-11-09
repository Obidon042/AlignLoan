import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, ScreenHeader } from "../components/loan-ui";

const MIN_AMOUNT = 50_000;
const MAX_AMOUNT = 1_000_000;
const AMOUNT_STEP = 50_000;

function formatNaira(value: number) {
  return `₦${new Intl.NumberFormat("en-NG").format(value)}`;
}

export default function CalculatorScreen() {
  const [amount, setAmount] = useState(300_000);
  const [tenure, setTenure] = useState(6);
  const monthlyEstimate = Math.round((amount * 1.12) / tenure);
  const progress = ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Loan Calculator" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-6"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text className="mb-4 text-2xl font-extrabold text-[#22213D]">
          Loan Calculator
        </Text>

        <View className="rounded-3xl bg-white p-5">
          <Text className="text-sm font-semibold text-[#77758D]">Loan Amount</Text>
          <Text className="mt-2 text-2xl font-extrabold text-[#22213D]">
            {formatNaira(amount)}
          </Text>
          <View className="mt-5 h-2 overflow-hidden rounded-full bg-[#E8F5E9]">
            <View
              className="h-full rounded-full bg-[#0B6623]"
              style={{ width: `${progress}%` }}
            />
          </View>
          <View className="mt-3 flex-row items-center justify-between">
            <Text className="text-xs text-[#9997AA]">{formatNaira(MIN_AMOUNT)}</Text>
            <View className="flex-row gap-3">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Decrease loan amount"
                className="h-9 w-9 items-center justify-center rounded-full bg-[#E8F5E9]"
                onPress={() =>
                  setAmount((current) => Math.max(MIN_AMOUNT, current - AMOUNT_STEP))
                }
              >
                <Text className="text-lg font-bold text-[#0B6623]">−</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Increase loan amount"
                className="h-9 w-9 items-center justify-center rounded-full bg-[#E8F5E9]"
                onPress={() =>
                  setAmount((current) => Math.min(MAX_AMOUNT, current + AMOUNT_STEP))
                }
              >
                <Text className="text-lg font-bold text-[#0B6623]">+</Text>
              </Pressable>
            </View>
            <Text className="text-xs text-[#9997AA]">{formatNaira(MAX_AMOUNT)}</Text>
          </View>
        </View>

        <View className="mt-4 rounded-3xl bg-white p-5">
          <Text className="text-sm font-semibold text-[#77758D]">Tenure</Text>
          <Text className="mt-2 text-2xl font-extrabold text-[#22213D]">
            {tenure} months
          </Text>
          <View className="mt-5 h-2 overflow-hidden rounded-full bg-[#E8F5E9]">
            <View
              className="h-full rounded-full bg-[#0B6623]"
              style={{ width: `${((tenure - 3) / 21) * 100}%` }}
            />
          </View>
          <View className="mt-3 flex-row items-center justify-between">
            <Text className="text-xs text-[#9997AA]">3 months</Text>
            <View className="flex-row gap-3">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Decrease loan tenure"
                className="h-9 w-9 items-center justify-center rounded-full bg-[#E8F5E9]"
                onPress={() => setTenure((current) => Math.max(3, current - 3))}
              >
                <Text className="text-lg font-bold text-[#0B6623]">−</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Increase loan tenure"
                className="h-9 w-9 items-center justify-center rounded-full bg-[#E8F5E9]"
                onPress={() => setTenure((current) => Math.min(24, current + 3))}
              >
                <Text className="text-lg font-bold text-[#0B6623]">+</Text>
              </Pressable>
            </View>
            <Text className="text-xs text-[#9997AA]">24 months</Text>
          </View>
        </View>

        <View className="mt-4 rounded-3xl bg-[#0B6623] p-5">
          <Text className="text-sm font-medium text-green-100">
            Estimated monthly installment
          </Text>
          <Text className="mt-2 text-2xl font-extrabold text-white">
            {formatNaira(monthlyEstimate)}
          </Text>
          <Text className="mt-2 text-xs leading-5 text-green-100">
            Estimate only. Final repayment terms are subject to approval.
          </Text>
        </View>

        <View className="mt-6">
          <PrimaryButton
            title="Continue"
            onPress={() =>
              router.push({
                pathname: "/select-loan",
                params: { amount: String(amount), tenure: String(tenure) },
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
