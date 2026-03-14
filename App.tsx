import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Fab } from "./components/Fab";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Fab
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      <Fab
        label="-1"
        position="left"
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 100,
    fontWeight: "bold",
  },
});
