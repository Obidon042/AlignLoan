import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import {
  ApplicationChoices,
  ApplicationField,
  ApplicationStep,
  getApplicationParams,
  type LoanApplicationData,
} from "../components/application-flow";

const purposes = [
  "Business",
  "Education",
  "Medical",
  "Personal",
  "Home",
];

export default function ApplicationFormScreen() {
  const params = useLocalSearchParams<LoanApplicationData>();
  const [purpose, setPurpose] = useState(params.purpose ?? "");
  const [amount, setAmount] = useState(Number(params.amount) || 300_000);

  function continueToEmployment() {
    if (!purpose) {
      Alert.alert("Select a loan purpose", "Choose what you need the loan for.");
      return;
    }
    if (amount < 1) {
      Alert.alert("Check the loan amount", "Enter an amount greater than zero.");
      return;
    }
    router.push({
      pathname: "/employment-details",
      params: getApplicationParams({ ...params, amount: String(amount), purpose }),
    });
  }

  return (
    <ApplicationStep
      step={1}
      title="Application Form"
      subtitle="Tell us a little about the loan you need."
      onContinue={continueToEmployment}
    >
      <View className="rounded-2xl bg-white p-4">
        <Text className="text-xs text-[#77758D]">Requested loan amount</Text>
        <Text className="mt-1 text-lg font-bold text-[#22213D]">
          ₦{new Intl.NumberFormat("en-NG").format(amount)}
        </Text>
      </View>
      <ApplicationField
        label="Loan amount"
        onChangeText={(value) =>
          setAmount(Number(value.replace(/[^\d]/g, "")) || 0)
        }
        placeholder="Enter amount"
        value={`₦${new Intl.NumberFormat("en-NG").format(amount)}`}
        keyboardType="numeric"
      />
      <ApplicationChoices
        label="Loan purpose"
        onChange={setPurpose}
        options={purposes}
        value={purpose}
      />
    </ApplicationStep>
  );
}
