import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#F4F3FC] px-5 py-5">
      <StatusBar barStyle="light-content" />
      <View className="flex-1 items-center justify-center">
        <View className="w-full max-w-md flex-1 items-center justify-center overflow-hidden rounded-[32px] bg-[#0B6623] px-7">
          <View className="absolute -right-20 -top-14 h-64 w-64 rounded-full bg-[#1A8535]" />
          <View className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#064D1A]" />

          <View className="flex-1 items-center justify-center">
            {/* AlignLoan Logo */}
            <View className="mb-6 h-32 w-32 items-center justify-center overflow-hidden rounded-[28px] bg-white shadow-lg">
              <Image
                source={require("../../assets/images/alignloan-logo.jpg")}
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                }}
              />
            </View>
            <Text className="text-center text-3xl font-extrabold tracking-[3px] text-white">
              ALIGNLOAN
            </Text>
            <Text className="mt-3 text-center text-base text-green-100">
              Your Goals. Our Support.
            </Text>
            <Text className="mt-12 max-w-xs text-center text-sm leading-6 text-green-100">
              A brighter start for the plans and possibilities ahead.
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Continue to the loan app"
            className="mb-10 h-14 w-full items-center justify-center rounded-2xl bg-white active:bg-green-50"
            onPress={() => router.replace("/onboarding")}
          >
            <Text className="text-base font-bold text-[#0B6623]">
              Get Started
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
