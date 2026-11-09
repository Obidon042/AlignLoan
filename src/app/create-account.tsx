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

export default function CreateAccountScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function createAccount() {
    if (!fullName.trim() || !email.trim() || !phone.trim() || !password) {
      Alert.alert("Missing information", "Please complete all fields to continue.");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("Check your email", "Enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      Alert.alert("Password too short", "Use at least 8 characters.");
      return;
    }

    Alert.alert(
      "Demo account",
      "Account creation is not connected yet. Continue to preview the loan dashboard?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Continue", onPress: () => router.replace("/(tabs)") },
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
          {/* Logo */}
          <View className="items-center pt-3">
            <Image
              source={require("../../assets/images/alignloan-logo.jpg")}
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
                borderRadius: 16,
              }}
            />
          </View>

          <View className="mb-6 mt-6">
            <Text className="text-2xl font-extrabold text-[#22213D]">
              Create Account
            </Text>
            <Text className="mt-1 text-sm text-[#77758D]">
              Join ALIGNLOAN and get started today.
            </Text>
          </View>

          <View className="gap-4">
            <FormField
              autoCapitalize="words"
              icon="A"
              label="Full Name"
              onChangeText={setFullName}
              placeholder="Enter your full name"
              value={fullName}
            />
            <FormField
              icon="@"
              keyboardType="email-address"
              label="Email Address"
              onChangeText={setEmail}
              placeholder="Enter your email"
              value={email}
            />
            <FormField
              icon="#"
              keyboardType="phone-pad"
              label="Phone Number"
              onChangeText={setPhone}
              placeholder="Enter your phone number"
              value={phone}
            />
            <FormField
              icon="•"
              label="Password"
              onChangeText={setPassword}
              onToggleSecure={() => setShowPassword((visible) => !visible)}
              placeholder="Create a password"
              secureTextEntry={!showPassword}
              value={password}
            />
          </View>

          <View className="mt-6">
            <PrimaryButton title="Create Account" onPress={createAccount} />
          </View>

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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
