import { globalStyles } from "@/styles/global-styles";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

export function ThemeText({ children, variant = "h1", ...props }: Props) {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
}
