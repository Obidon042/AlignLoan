import { useState } from "react";
import { Alert, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField, PrimaryButton, ScreenHeader } from "../components/loan-ui";

export default function ChangePasswordScreen() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function savePassword() {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Missing information", "Complete all password fields.");
      return;
    }
    if (newPassword.length < 8) {
      Alert.alert("Password too short", "Use at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Passwords don't match", "Check your new password and try again.");
      return;
    }

    Alert.alert(
      "Password service unavailable",
      "No password was changed. Connect an authentication service to enable this feature.",
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FC] px-5" edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" />
      <ScreenHeader title="Change Password" />
      <View className="flex-1">
        <View className="gap-4 rounded-2xl bg-white p-4">
          <FormField
            icon="•"
            label="Current password"
            onChangeText={setCurrentPassword}
            placeholder="Enter current password"
            secureTextEntry
            value={currentPassword}
          />
          <FormField
            icon="•"
            label="New password"
            onChangeText={setNewPassword}
            placeholder="Enter new password"
            secureTextEntry
            value={newPassword}
          />
          <FormField
            icon="•"
            label="Confirm new password"
            onChangeText={setConfirmPassword}
            placeholder="Confirm new password"
            secureTextEntry
            value={confirmPassword}
          />
        </View>
        <View className="mt-auto pb-5 pt-6">
          <PrimaryButton title="Update Password" onPress={savePassword} />
        </View>
      </View>
    </SafeAreaView>
  );
}
