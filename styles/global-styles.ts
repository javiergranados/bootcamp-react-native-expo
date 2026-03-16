import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
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
