import { Image } from "react-native";

export function AlignLoanLogo({
  width = 180,
  height = 100,
}: {
  width?: number;
  height?: number;
} = {}) {
  return (
    <Image
      source={require("../../assets/images/alignloan-logo.jpg")}
      style={{
        width,
        height,
        resizeMode: "contain",
      }}
    />
  );
}
