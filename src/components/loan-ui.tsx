import type { KeyboardTypeOptions } from "react-native";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { router } from "expo-router";

export function BrandLogo({
  light = false,
  size = "small",
}: {
  light?: boolean;
  size?: "small" | "medium" | "large";
}) {
  const dimensions = {
    small: { width: 48, height: 48 },
    medium: { width: 80, height: 80 },
    large: { width: 140, height: 140 },
  };
  const { width, height } = dimensions[size];
  return (
    <View className="items-center">
      <Image
        source={require("../../assets/images/alignloan-logo.jpg")}
        style={{
          width,
          height,
          resizeMode: "contain",
          borderRadius: size === "small" ? 10 : size === "medium" ? 16 : 24,
        }}
      />
    </View>
  );
}

export function PrimaryButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      className="h-14 items-center justify-center rounded-2xl bg-[#0B6623] shadow-sm active:bg-[#085A1E]"
      onPress={onPress}
    >
      <Text className="text-base font-bold text-white">{title}</Text>
    </Pressable>
  );
}

export function ScreenHeader({
  title,
  showLogo = false,
}: {
  title: string;
  showLogo?: boolean;
}) {
  return (
    <View className="mb-6 flex-row items-center justify-between">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        className="h-10 w-10 items-center justify-center rounded-full bg-white"
        onPress={() => router.back()}
      >
        <Text className="text-xl font-semibold text-[#25234A]">‹</Text>
      </Pressable>
      {showLogo ? (
        <BrandLogo />
      ) : (
        <Text className="text-base font-bold text-[#25234A]">{title}</Text>
      )}
      <View className="h-10 w-10" />
    </View>
  );
}

type FormFieldProps = {
  label: string;
  placeholder: string;
  icon: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
  onToggleSecure?: () => void;
};

export function FormField({
  label,
  placeholder,
  icon,
  value,
  onChangeText,
  keyboardType = "default",
  autoCapitalize = "none",
  secureTextEntry = false,
  onToggleSecure,
}: FormFieldProps) {
  return (
    <View>
      <Text className="mb-2 text-sm font-semibold text-[#34334C]">{label}</Text>
      <View className="h-14 flex-row items-center rounded-2xl border border-[#E8E7F1] bg-white px-4">
        <Text className="mr-3 w-5 text-center text-base font-semibold text-[#85839B]">
          {icon}
        </Text>
        <TextInput
          accessibilityLabel={label}
          autoCapitalize={autoCapitalize}
          className="h-full flex-1 text-sm text-[#25234A]"
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#A6A4B7"
          secureTextEntry={secureTextEntry}
          value={value}
        />
        {onToggleSecure ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={secureTextEntry ? "Show password" : "Hide password"}
            className="pl-2"
            onPress={onToggleSecure}
          >
            <Text className="text-xs font-semibold text-[#0B6623]">
              {secureTextEntry ? "Show" : "Hide"}
            </Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

type ArtworkKind = "funds" | "repayment" | "secure";

export function OnboardingArtwork({ kind }: { kind: ArtworkKind }) {
  return (
    <View className="h-56 w-full items-center justify-center">
      <View className="absolute h-44 w-44 rounded-full bg-[#E8F5E9]" />
      {kind === "funds" ? (
        <View className="h-28 w-40 rotate-[-6deg] items-center justify-center rounded-3xl border border-white bg-white shadow-lg">
          <View className="absolute -left-3 top-5 h-12 w-12 items-center justify-center rounded-2xl bg-[#0B6623]">
            <Text className="text-2xl font-bold text-white">₦</Text>
          </View>
          <View className="ml-8 w-20">
            <View className="mb-2 h-2 w-14 rounded-full bg-[#C8E6C9]" />
            <View className="h-2 w-20 rounded-full bg-[#E8F5E9]" />
          </View>
          <View className="absolute -right-4 -top-4 h-10 w-10 items-center justify-center rounded-full bg-[#DAA520]">
            <Text className="text-lg font-bold text-white">+</Text>
          </View>
        </View>
      ) : null}
      {kind === "repayment" ? (
        <View className="w-36 overflow-hidden rounded-3xl border border-[#C8E6C9] bg-white shadow-lg">
          <View className="h-11 items-center justify-center bg-[#0B6623]">
            <Text className="text-sm font-bold text-white">PAYMENT PLAN</Text>
          </View>
          <View className="flex-row flex-wrap justify-center gap-2 p-4">
            {["M", "T", "W", "T", "F", "S"].map((day, index) => (
              <View
                className={`h-7 w-7 items-center justify-center rounded-full ${
                  index === 3 ? "bg-[#DAA520]" : "bg-[#E8F5E9]"
                }`}
                key={`${day}-${index}`}
              >
                <Text className={`text-[10px] font-bold ${index === 3 ? "text-white" : "text-[#0B6623]"}`}>{day}</Text>
              </View>
            ))}
          </View>
          <View className="mx-auto mb-4 h-2 w-16 rounded-full bg-[#C8E6C9]" />
        </View>
      ) : null}
      {kind === "secure" ? (
        <View className="h-32 w-28 items-center justify-center rounded-[42px] bg-[#0B6623] shadow-lg">
          <View className="absolute -top-4 h-10 w-10 items-center justify-center rounded-full bg-[#DAA520]">
            <Text className="text-lg font-bold text-white">✓</Text>
          </View>
          <Text className="text-6xl font-bold text-white">✓</Text>
          <View className="absolute -bottom-3 -right-4 h-8 w-8 rounded-full bg-[#81C784]" />
        </View>
      ) : null}
      <View className="absolute bottom-4 h-2 w-24 rounded-full bg-[#C8E6C9]" />
    </View>
  );
}
