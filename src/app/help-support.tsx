import { Alert, Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeader } from "../components/loan-ui";

const questions = [
  {
    question: "How do I apply for a loan?",
    answer: "Use the loan calculator on the dashboard to preview an application.",
  },
  {
    question: "Can I make a repayment in this app?",
    answer: "Not yet. A payment provider must be connected before real payments can be made.",
  },
  {
    question: "How do I verify my identity?",
    answer: "Open the verification option from the dashboard. Document upload is not connected yet.",
  },
];

export default function HelpSupportScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Help & Support" />
      <Text className="mb-2 text-2xl font-extrabold text-[#22213D]">
        Help & Support
      </Text>
      <Text className="mb-5 text-sm text-[#77758D]">
        Frequently asked questions
      </Text>
      <View className="rounded-2xl bg-white px-4">
        {questions.map((item, index) => (
          <View
            className={`py-4 ${index > 0 ? "border-t border-[#F0EFF5]" : ""}`}
            key={item.question}
          >
            <Text className="text-sm font-bold text-[#34334C]">
              {item.question}
            </Text>
            <Text className="mt-2 text-xs leading-5 text-[#77758D]">
              {item.answer}
            </Text>
          </View>
        ))}
      </View>
      <Pressable
        accessibilityRole="button"
        className="mt-4 flex-row items-center rounded-2xl bg-white p-4"
        onPress={() =>
          Alert.alert(
            "Support unavailable",
            "Customer support will be available when a contact channel is configured.",
          )
        }
      >
        <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#F1F0FF]">
          <Text className="font-bold text-[#5B45E7]">?</Text>
        </View>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-[#34334C]">
            Contact Support
          </Text>
          <Text className="mt-1 text-xs text-[#77758D]">
            Get help with your account
          </Text>
        </View>
        <Text className="text-xl text-[#9997AA]">›</Text>
      </Pressable>
    </SafeAreaView>
  );
}
