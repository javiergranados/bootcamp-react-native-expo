import { Colors } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

const BACKGROUND_COLOR_MAP = {
  numbers: Colors.darkGray,
  operators: Colors.orange,
  controls: Colors.lightGray,
};

const TEXT_COLOR_MAP = {
  numbers: Colors.textPrimary,
  operators: Colors.textPrimary,
  controls: Colors.darkGray,
};

interface Props {
  label: string;
  isZero?: boolean;
  variant?: "numbers" | "operators" | "controls";
  onPress?: () => void;
}

export function Button({
  label,
  isZero = false,
  variant = "numbers",
  onPress,
}: Props) {
  const backgroundColor = BACKGROUND_COLOR_MAP[variant];
  const textColor = TEXT_COLOR_MAP[variant];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        isZero && styles.buttonZero,
        pressed && { opacity: 0.8 },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    fontWeight: "300",
    fontFamily: "SpaceMono",
  },
  buttonZero: {
    width: 180,
  },
});
