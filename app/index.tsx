import { ThemeText } from "@/components";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <ThemeText variant="h1">25 x 2</ThemeText>
      <ThemeText variant="h1">50</ThemeText>
    </View>
  );
}
