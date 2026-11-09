import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import {
  ApplicationChoices,
  ApplicationField,
  ApplicationStep,
  getApplicationParams,
  type LoanApplicationData,
} from "../components/application-flow";

const banks = ["Access", "GTBank", "Zenith", "UBA", "Other"];

export default function BankInformationScreen() {
  const params = useLocalSearchParams<LoanApplicationData>();
  const [bank, setBank] = useState(params.bank ?? "");
  const [accountNumber, setAccountNumber] = useState(
    params.accountNumber ?? "",
  );
  const [accountName, setAccountName] = useState(params.accountName ?? "");

  function continueToDocuments() {
    if (!bank || accountNumber.trim().length !== 10 || !accountName.trim()) {
      Alert.alert(
        "Check your bank details",
        "Select your bank, enter a 10-digit account number, and enter the account name.",
      );
      return;
    }
    router.push({
      pathname: "/document-upload",
      params: getApplicationParams({
        ...params,
        accountNumber: undefined,
        accountLastFour: accountNumber.slice(-4),
        bank,
        accountName,
      }),
    });
  }

  return (
    <ApplicationStep
      step={3}
      title="Bank Information"
      subtitle="Provide the bank account for your loan application."
      onContinue={continueToDocuments}
    >
      <ApplicationChoices
        label="Bank name"
        onChange={setBank}
        options={banks}
        value={bank}
      />
      <ApplicationField
        keyboardType="number-pad"
        label="Account number"
        onChangeText={(value) =>
          setAccountNumber(value.replace(/\D/g, "").slice(0, 10))
        }
        placeholder="Enter your 10-digit account number"
        value={accountNumber}
      />
      <ApplicationField
        label="Account name"
        onChangeText={setAccountName}
        placeholder="Enter the name on your account"
        value={accountName}
      />
    </ApplicationStep>
  );
}
