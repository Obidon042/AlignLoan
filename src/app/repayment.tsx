import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, ScreenHeader } from "../components/loan-ui";

const repaymentOptions = [
  {
    title: "Payment Reminder",
    detail: "Due in 3 days",
    icon: "◷",
  },
  {
    title: "Loan Repayment",
    detail: "Due in 5 days",
    icon: "₦",
  },
  {
    title: "Monthly Payment",
    detail: "Due in 5 days",
    icon: "↻",
  },
];

export default function RepaymentScreen() {
  const params = useLocalSearchParams<{ amount?: string; tenure?: string }>();
  const [selectedOption, setSelectedOption] = useState(1);
  const amount = Number(params.amount) || 300_000;

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Make Repayment" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow pb-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="mb-2 text-2xl font-extrabold text-[#22213D]">
          Make Repayment
        </Text>
        <Text className="text-sm text-[#77758D]">
          Choose a payment to view its details
        </Text>

        <View className="mt-6 gap-3">
          {repaymentOptions.map((option, index) => {
            const isSelected = selectedOption === index;
            return (
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                className={`flex-row items-center rounded-2xl border bg-white p-4 ${
                  isSelected ? "border-[#5B45E7]" : "border-[#ECEAF2]"
                }`}
                key={option.title}
                onPress={() => setSelectedOption(index)}
              >
                <View className="mr-3 h-11 w-11 items-center justify-center rounded-xl bg-[#F1F0FF]">
                  <Text className="text-xl font-bold text-[#5B45E7]">
                    {option.icon}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-[#34334C]">{option.title}</Text>
                  <Text className="mt-1 text-xs text-[#77758D]">
                    {option.detail}
                  </Text>
                </View>
                <View
                  className={`h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected
                      ? "border-[#5B45E7] bg-[#5B45E7]"
                      : "border-[#D6D4E1]"
                  }`}
                >
                  {isSelected ? (
                    <Text className="text-xs font-bold text-white">✓</Text>
                  ) : null}
                </View>
              </Pressable>
            );
          })}
        </View>

        <View className="mt-5 rounded-2xl bg-white p-4">
          <Text className="text-xs text-[#77758D]">Selected loan amount</Text>
          <Text className="mt-1 text-lg font-bold text-[#22213D]">
            ₦{new Intl.NumberFormat("en-NG").format(amount)}
          </Text>
        </View>

        <View className="mt-auto pt-8">
          <PrimaryButton
            title="Continue"
            onPress={() =>
              router.push({
                pathname: "/application-form",
                params: {
                  amount: String(amount),
                  tenure: params.tenure || "6",
                  repaymentOption: repaymentOptions[selectedOption].title,
                },
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
