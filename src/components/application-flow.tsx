import type { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, ScreenHeader } from "./loan-ui";

export type LoanApplicationData = {
  amount?: string;
  tenure?: string;
  purpose?: string;
  employmentType?: string;
  employer?: string;
  jobTitle?: string;
  income?: string;
  workAddress?: string;
  bank?: string;
  accountNumber?: string;
  accountLastFour?: string;
  accountName?: string;
};

export function getApplicationParams(data: LoanApplicationData) {
  return Object.fromEntries(
    Object.entries(data).filter(
      (entry): entry is [string, string] => typeof entry[1] === "string",
    ),
  ) as Record<string, string>;
}

export function ApplicationStep({
  step,
  title,
  subtitle,
  children,
  buttonTitle = "Continue",
  onContinue,
}: {
  step: number;
  title: string;
  subtitle: string;
  children: ReactNode;
  buttonTitle?: string;
  onContinue: () => void;
}) {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScreenHeader title={title} />
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow pb-6"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-6">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-xs font-semibold text-[#77758D]">
                Step {step} of 5
              </Text>
              <Text className="text-xs font-semibold text-[#5B45E7]">
                {step * 20}%
              </Text>
            </View>
            <View className="h-1.5 overflow-hidden rounded-full bg-[#E8E6F3]">
              <View
                className="h-full rounded-full bg-[#5B45E7]"
                style={{ width: `${step * 20}%` }}
              />
            </View>
            <Text className="mt-5 text-2xl font-extrabold text-[#22213D]">
              {title}
            </Text>
            <Text className="mt-2 text-sm leading-5 text-[#77758D]">
              {subtitle}
            </Text>
          </View>

          <View className="gap-4">{children}</View>

          <View className="mt-auto pt-8">
            <PrimaryButton title={buttonTitle} onPress={onContinue} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export function ApplicationField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  keyboardType?: "default" | "numeric" | "number-pad" | "phone-pad";
}) {
  return (
    <View>
      <Text className="mb-2 text-sm font-semibold text-[#34334C]">{label}</Text>
      <TextInput
        accessibilityLabel={label}
        className="h-12 rounded-xl border border-[#E8E7F1] bg-white px-4 text-sm text-[#25234A]"
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A6A4B7"
        value={value}
      />
    </View>
  );
}

export function ApplicationChoices({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <View>
      <Text className="mb-2 text-sm font-semibold text-[#34334C]">{label}</Text>
      <View className="flex-row flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected }}
              className={`rounded-full border px-4 py-2.5 ${
                selected
                  ? "border-[#5B45E7] bg-[#F1F0FF]"
                  : "border-[#E6E4EF] bg-white"
              }`}
              key={option}
              onPress={() => onChange(option)}
            >
              <Text
                className={`text-xs font-semibold ${
                  selected ? "text-[#5B45E7]" : "text-[#77758D]"
                }`}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View className="flex-row items-start justify-between border-b border-[#F0EFF5] py-3">
      <Text className="mr-3 text-sm text-[#77758D]">{label}</Text>
      <Text className="flex-1 text-right text-sm font-semibold text-[#34334C]">
        {value}
      </Text>
    </View>
  );
}
