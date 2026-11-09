import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, ScreenHeader } from "../components/loan-ui";

const loanOptions = [100_000, 200_000, 300_000];

function formatNaira(value: number) {
  return `₦${new Intl.NumberFormat("en-NG").format(value)}`;
}

export default function SelectLoanScreen() {
  const params = useLocalSearchParams<{ amount?: string; tenure?: string }>();
  const requestedAmount = Number(params.amount);
  const initialAmount =
    Number.isFinite(requestedAmount) && requestedAmount >= 50_000
      ? requestedAmount
      : 300_000;
  const [amount, setAmount] = useState(initialAmount);
  const [tenure] = useState(Number(params.tenure) || 6);

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Select Loan Amount" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow pb-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="mb-2 text-2xl font-extrabold text-[#22213D]">
          Select Loan Amount
        </Text>
        <Text className="text-sm text-[#77758D]">How much do you need?</Text>

        <View className="mt-8 items-center rounded-3xl bg-white px-5 py-8">
          <Text className="text-sm font-semibold text-[#77758D]">
            Your selected amount
          </Text>
          <Text className="mt-3 text-3xl font-extrabold text-[#22213D]">
            {formatNaira(amount)}
          </Text>
          <View className="mt-7 flex-row gap-3">
            {loanOptions.map((option) => {
              const isSelected = amount === option;
              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  className={`rounded-full border px-4 py-3 ${
                    isSelected
                      ? "border-[#5B45E7] bg-[#F1F0FF]"
                      : "border-[#E6E4EF] bg-white"
                  }`}
                  key={option}
                  onPress={() => setAmount(option)}
                >
                  <Text
                    className={`text-xs font-bold ${
                      isSelected ? "text-[#5B45E7]" : "text-[#77758D]"
                    }`}
                  >
                    {formatNaira(option)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View className="mt-auto pt-8">
          <PrimaryButton
            title="Continue"
            onPress={() =>
              router.push({
                pathname: "/repayment",
                params: { amount: String(amount), tenure: String(tenure) },
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
