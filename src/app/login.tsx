import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField, PrimaryButton } from "../components/loan-ui";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function logIn() {
    if (!email.trim() || !password) {
      Alert.alert(
        "Missing information",
        "Enter your email and password to continue.",
      );
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Check your email", "Enter a valid email address.");
      return;
    }

    Alert.alert(
      "Demo sign-in",
      "Authentication is not connected yet. Continue to preview the loan dashboard?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: () => router.replace("/(tabs)"),
        },
      ],
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="flex-grow px-6 pb-8"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ALIGNLOAN LOGO */}
          <View className="items-center pt-8">
            <Image
              source={require("../../assets/images/alignloan-logo.jpg")}
              style={{
                width: 200,
                height: 120,
                resizeMode: "contain",
              }}
            />
          </View>

          {/* PAGE TITLE */}
          <View className="mb-8 mt-10 items-center">
            <Text className="text-2xl font-extrabold text-[#22213D]">
              Welcome Back!
            </Text>

            <Text className="mt-2 text-sm text-[#77758D]">
              Login to your account
            </Text>
          </View>

          {/* LOGIN FORM */}
          <View className="gap-5">
            <FormField
              icon="@"
              keyboardType="email-address"
              label="Email"
              onChangeText={setEmail}
              placeholder="Enter your email"
              value={email}
            />

            <FormField
              icon="•"
              label="Password"
              onChangeText={setPassword}
              onToggleSecure={() => setShowPassword((visible) => !visible)}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={password}
            />
          </View>

          {/* FORGOT PASSWORD */}
          <Pressable
            accessibilityRole="button"
            className="mt-4 self-end"
            onPress={() =>
              Alert.alert(
                "Password reset",
                "Password reset will be available when authentication is connected.",
              )
            }
          >
            <Text className="text-sm font-semibold text-[#0B6623]">
              Forgot Password?
            </Text>
          </Pressable>

          {/* LOGIN BUTTON */}
          <View className="mt-7">
            <PrimaryButton title="Log In" onPress={logIn} />
          </View>

          {/* SIGN UP */}
          <Pressable
            accessibilityRole="button"
            className="mt-6 items-center"
            onPress={() => router.replace("/create-account")}
          >
            <Text className="text-sm text-[#77758D]">
              Don&apos;t have an account?{" "}
              <Text className="font-bold text-[#0B6623]">Sign Up</Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
