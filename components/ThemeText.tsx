import { Colors } from "@/constants/theme";
import { StyleSheet, Text, TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

export function ThemeText({ children, variant = "h1", ...props }: Props) {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && styles.mainResult,
        variant === "h2" && styles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  mainResult: {
    color: Colors.textPrimary,
    textAlign: "right",
    fontSize: 70,
    fontWeight: "400",
  },
  subResult: {
    color: Colors.textSecondary,
    textAlign: "right",
    fontSize: 40,
    fontWeight: "300",
  },
});
