import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import {
  ApplicationStep,
  ReviewRow,
  type LoanApplicationData,
} from "../components/application-flow";

export default function ReviewApplicationScreen() {
  const params = useLocalSearchParams<LoanApplicationData>();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const amount = Number(params.amount) || 300_000;

  function submitApplication() {
    if (!acceptedTerms) {
      Alert.alert(
        "Confirm your application",
        "Please confirm that you have reviewed the application details.",
      );
      return;
    }

    router.replace("/application-success");
  }

  return (
    <ApplicationStep
      step={5}
      title="Review Application"
      subtitle="Please check your details before continuing."
      buttonTitle="Submit Application"
      onContinue={submitApplication}
    >
      <View className="rounded-2xl bg-white px-4">
        <Text className="pt-4 text-base font-bold text-[#34334C]">
          Loan details
        </Text>
        <ReviewRow
          label="Loan amount"
          value={`₦${new Intl.NumberFormat("en-NG").format(amount)}`}
        />
        <ReviewRow label="Loan purpose" value={params.purpose || "Not provided"} />
        <ReviewRow label="Tenure" value={`${params.tenure || "6"} months`} />
      </View>

      <View className="rounded-2xl bg-white px-4">
        <Text className="pt-4 text-base font-bold text-[#34334C]">
          Employment
        </Text>
        <ReviewRow
          label="Employment type"
          value={params.employmentType || "Not provided"}
        />
        <ReviewRow label="Employer" value={params.employer || "Not provided"} />
        <ReviewRow label="Monthly income" value={params.income || "Not provided"} />
      </View>

      <View className="rounded-2xl bg-white px-4">
        <Text className="pt-4 text-base font-bold text-[#34334C]">
          Bank account
        </Text>
        <ReviewRow label="Bank" value={params.bank || "Not provided"} />
        <ReviewRow
          label="Account number"
          value={
            params.accountLastFour
              ? `••••••${params.accountLastFour}`
              : "Not provided"
          }
        />
        <ReviewRow
          label="Account name"
          value={params.accountName || "Not provided"}
        />
      </View>

      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: acceptedTerms }}
        className="flex-row items-start px-1 py-2"
        onPress={() => setAcceptedTerms((checked) => !checked)}
      >
        <View
          className={`mr-3 mt-0.5 h-5 w-5 items-center justify-center rounded border ${
            acceptedTerms
              ? "border-[#5B45E7] bg-[#5B45E7]"
              : "border-[#C9C6D9] bg-white"
          }`}
        >
          {acceptedTerms ? (
            <Text className="text-xs font-bold text-white">✓</Text>
          ) : null}
        </View>
        <Text className="flex-1 text-xs leading-5 text-[#77758D]">
          I confirm that I have reviewed these details. This demo will not send
          the application or make a lending decision.
        </Text>
      </Pressable>
    </ApplicationStep>
  );
}
