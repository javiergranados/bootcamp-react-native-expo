import { Text, Pressable, StyleSheet } from "react-native";
interface FabProps {
  label: string;
  position?: "left" | "right";
  onPress: () => void;
  onLongPress: () => void;
}

export function Fab({
  label,
  position = "right",
  onPress,
  onLongPress,
}: FabProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
        position === "left" ? styles.positionLeft : styles.positionRight,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    padding: 20,
    backgroundColor: "purple",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  positionLeft: {
    left: 20,
    right: "auto",
  },
  positionRight: {
    right: 20,
    left: "auto",
  },
});
