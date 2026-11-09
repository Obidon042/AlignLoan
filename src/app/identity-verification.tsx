import { router } from "expo-router";
import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, ScreenHeader } from "../components/loan-ui";

export default function IdentityVerificationScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Verify Your Identity" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow pb-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-extrabold text-[#22213D]">
          Verify Your Identity
        </Text>
        <Text className="mt-2 text-sm leading-6 text-[#77758D]">
          Upload a clear photo of your ID for verification.
        </Text>

        <View className="mt-8 h-64 items-center justify-center overflow-hidden rounded-3xl bg-[#F0EEFF]">
          <View className="absolute -left-7 top-8 h-28 w-28 rounded-full bg-[#E3DFFF]" />
          <View className="absolute -bottom-10 -right-4 h-36 w-36 rounded-full bg-[#E3DFFF]" />
          <View className="w-56 rounded-2xl border-2 border-[#8A7CF0] bg-white p-5 shadow-sm">
            <View className="flex-row items-center">
              <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-[#EAE8FF]">
                <Text className="text-2xl text-[#6554E9]">♙</Text>
              </View>
              <View className="flex-1">
                <View className="mb-2 h-2 w-24 rounded-full bg-[#D9D5FF]" />
                <View className="h-2 w-16 rounded-full bg-[#ECEAFF]" />
              </View>
            </View>
            <View className="mt-5 h-2 w-full rounded-full bg-[#ECEAFF]" />
            <View className="mt-2 h-2 w-3/4 rounded-full bg-[#ECEAFF]" />
            <View className="mt-4 flex-row items-center justify-between">
              <View className="h-2 w-12 rounded-full bg-[#D9D5FF]" />
              <Text className="text-2xl font-bold text-[#6554E9]">✓</Text>
            </View>
          </View>
          <View className="absolute bottom-6 right-14 h-9 w-9 items-center justify-center rounded-full bg-[#6554E9]">
            <Text className="text-xl font-bold text-white">+</Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          className="mt-5 h-12 items-center justify-center rounded-2xl border border-[#DAD7F6] bg-white"
          onPress={() =>
            Alert.alert(
              "Document upload",
              "ID document upload will be available when verification is connected.",
            )
          }
        >
          <Text className="font-bold text-[#5B45E7]">Select ID document</Text>
        </Pressable>

        <View className="mt-auto pt-6">
          <PrimaryButton
            title="Continue"
            onPress={() =>
              Alert.alert(
                "Verification not connected",
                "Your identity document cannot be submitted until a verification service is connected.",
              )
            }
          />
          <Pressable
            accessibilityRole="button"
            className="mt-5 items-center"
            onPress={() => router.replace("/create-account")}
          >
            <Text className="text-sm text-[#77758D]">
              Need an account?{" "}
              <Text className="font-bold text-[#5B45E7]">Sign up now</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
