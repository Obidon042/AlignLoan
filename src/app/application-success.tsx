import { router } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "../components/loan-ui";

export default function ApplicationSuccessScreen() {
  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-white px-7"
      edges={["top", "bottom"]}
    >
      <StatusBar barStyle="dark-content" />
      <View className="mb-8 h-36 w-36 items-center justify-center rounded-full bg-[#F0EEFF]">
        <View className="h-24 w-24 items-center justify-center rounded-full bg-[#5B45E7]">
          <Text className="text-5xl font-bold text-white">✓</Text>
        </View>
        <View className="absolute right-2 top-1 h-4 w-4 rounded-full bg-[#FFD66B]" />
        <View className="absolute bottom-1 left-4 h-3 w-3 rounded-full bg-[#B7ACFF]" />
        <View className="absolute right-0 bottom-8 h-2 w-2 rounded-full bg-[#8B7CF0]" />
      </View>
      <Text className="text-center text-2xl font-extrabold text-[#22213D]">
        Application Preview Complete
      </Text>
      <Text className="mt-3 max-w-[300px] text-center text-sm leading-6 text-[#77758D]">
        You&apos;ve finished the application screens. No application was sent:
        connect a secure backend to enable real submissions.
      </Text>
      <View className="mt-8 w-full">
        <PrimaryButton
          title="Back to Dashboard"
          onPress={() => router.replace("/(tabs)")}
        />
      </View>
      <Pressable
        accessibilityRole="button"
        className="mt-5"
        onPress={() => router.replace("/calculator")}
      >
        <Text className="text-sm font-semibold text-[#5B45E7]">
          Start another application preview
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
