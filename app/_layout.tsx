import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";

const IS_ANDROID = Platform.OS === "android";

if (IS_ANDROID) {
  NavigationBar.setBackgroundColorAsync("#000000");
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={globalStyles.layout}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
}
