import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </View>
  );
}
