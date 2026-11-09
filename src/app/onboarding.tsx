import { useState } from "react";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BrandLogo,
  OnboardingArtwork,
  PrimaryButton,
} from "../components/loan-ui";

const slides = [
  {
    kind: "funds" as const,
    title: "Get the Funds\nYou Need",
    description:
      "Fast, secure and flexible loans to help you achieve your goals.",
  },
  {
    kind: "repayment" as const,
    title: "Flexible Repayment\nPlans",
    description:
      "Choose a repayment plan that works for you and your budget.",
  },
  {
    kind: "secure" as const,
    title: "Safe & Secure",
    description:
      "Your data and money are always protected with industry-leading security.",
  },
];

export default function OnboardingScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];
  const isLastSlide = activeSlide === slides.length - 1;

  function continueOnboarding() {
    if (isLastSlide) {
      router.replace("/create-account");
      return;
    }

    setActiveSlide((current) => current + 1);
  }

  return (
    <SafeAreaView className="flex-1 bg-white px-6" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center justify-between pt-2">
        <BrandLogo size="small" />
        <Pressable
          accessibilityRole="button"
          onPress={() => router.replace("/create-account")}
        >
          <Text className="text-sm font-semibold text-[#8B89A0]">Skip</Text>
        </Pressable>
      </View>

      <View className="flex-1 justify-center">
        <OnboardingArtwork kind={slide.kind} />
        <View className="mt-5 items-center">
          <Text className="text-center text-[26px] font-extrabold leading-8 text-[#22213D]">
            {slide.title}
          </Text>
          <Text className="mt-3 max-w-[290px] text-center text-sm leading-6 text-[#77758D]">
            {slide.description}
          </Text>
        </View>
      </View>

      <View className="pb-5">
        <View className="mb-6 flex-row justify-center gap-2">
          {slides.map((item, index) => (
            <View
              className={`h-2 rounded-full ${index === activeSlide ? "w-6 bg-[#0B6623]" : "w-2 bg-[#C8E6C9]"
                }`}
              key={item.kind}
            />
          ))}
        </View>
        <PrimaryButton
          title={isLastSlide ? "Get Started" : "Continue"}
          onPress={continueOnboarding}
        />
        <Pressable
          accessibilityRole="button"
          className="mt-5 items-center"
          onPress={() => router.replace("/login")}
        >
          <Text className="text-sm text-[#77758D]">
            Already have an account?{" "}
            <Text className="font-bold text-[#0B6623]">Log in</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
