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

const employmentTypes = ["Employed", "Self-employed", "Contract", "Other"];

export default function EmploymentDetailsScreen() {
  const params = useLocalSearchParams<LoanApplicationData>();
  const [employmentType, setEmploymentType] = useState(
    params.employmentType ?? "",
  );
  const [employer, setEmployer] = useState(params.employer ?? "");
  const [jobTitle, setJobTitle] = useState(params.jobTitle ?? "");
  const [income, setIncome] = useState(params.income ?? "");
  const [workAddress, setWorkAddress] = useState(params.workAddress ?? "");

  function continueToBank() {
    if (!employmentType || !employer.trim() || !income.trim()) {
      Alert.alert(
        "Complete your employment details",
        "Choose an employment type and enter your employer and monthly income.",
      );
      return;
    }
    router.push({
      pathname: "/bank-information",
      params: getApplicationParams({
        ...params,
        employmentType,
        employer,
        jobTitle,
        income,
        workAddress,
      }),
    });
  }

  return (
    <ApplicationStep
      step={2}
      title="Employment Details"
      subtitle="Add your current work and income information."
      onContinue={continueToBank}
    >
      <ApplicationChoices
        label="Employment type"
        onChange={setEmploymentType}
        options={employmentTypes}
        value={employmentType}
      />
      <ApplicationField
        label="Employer or business name"
        onChangeText={setEmployer}
        placeholder="Enter employer name"
        value={employer}
      />
      <ApplicationField
        label="Job title (optional)"
        onChangeText={setJobTitle}
        placeholder="Enter your job title"
        value={jobTitle}
      />
      <ApplicationField
        keyboardType="numeric"
        label="Monthly income"
        onChangeText={setIncome}
        placeholder="Enter monthly income"
        value={income}
      />
      <ApplicationField
        label="Work address (optional)"
        onChangeText={setWorkAddress}
        placeholder="Enter your work address"
        value={workAddress}
      />
    </ApplicationStep>
  );
}
