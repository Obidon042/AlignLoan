import { router, useLocalSearchParams } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import {
  ApplicationStep,
  getApplicationParams,
  type LoanApplicationData,
} from "../components/application-flow";

const requiredDocuments = [
  { title: "Government-issued ID", description: "National ID, passport or driver's licence" },
  { title: "Proof of income", description: "Recent payslip or business income record" },
  { title: "Bank statement", description: "Your recent account statement" },
];

export default function DocumentUploadScreen() {
  const params = useLocalSearchParams<LoanApplicationData>();

  function showUploadNotice() {
    Alert.alert(
      "Upload unavailable",
      "File selection and document uploads will be enabled when a secure upload service is connected.",
    );
  }

  return (
    <ApplicationStep
      step={4}
      title="Documents Upload"
      subtitle="These documents help us review your application."
      buttonTitle="Review Application"
      onContinue={() =>
        router.push({
          pathname: "/review-application",
          params: getApplicationParams(params),
        })
      }
    >
      {requiredDocuments.map((document) => (
        <View className="rounded-2xl bg-white p-4" key={document.title}>
          <View className="flex-row items-center">
            <View className="mr-3 h-11 w-11 items-center justify-center rounded-xl bg-[#F1F0FF]">
              <Text className="text-xl font-bold text-[#5B45E7]">⇧</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-[#34334C]">
                {document.title}
              </Text>
              <Text className="mt-1 text-xs leading-4 text-[#77758D]">
                {document.description}
              </Text>
            </View>
          </View>
          <Pressable
            accessibilityRole="button"
            className="mt-4 h-10 items-center justify-center rounded-xl border border-[#E6E4F3]"
            onPress={showUploadNotice}
          >
            <Text className="text-sm font-semibold text-[#5B45E7]">
              Select document
            </Text>
          </Pressable>
        </View>
      ))}
      <View className="rounded-xl bg-[#F1F0FF] p-3">
        <Text className="text-xs leading-5 text-[#5B45E7]">
          Your documents will be encrypted and handled securely once document
          upload is connected.
        </Text>
      </View>
    </ApplicationStep>
  );
}
