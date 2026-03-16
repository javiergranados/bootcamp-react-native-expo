import { Button, ThemeText } from "@/components";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      {/* Results */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">25 x 2</ThemeText>
        <ThemeText variant="h1">50</ThemeText>
      </View>

      {/* Buttons */}
      <View style={globalStyles.row}>
        <Button label="C" variant="controls" onPress={() => console.log("C")} />
        <Button
          label="+/-"
          variant="controls"
          onPress={() => console.log("+/-")}
        />
        <Button
          label="del"
          variant="controls"
          onPress={() => console.log("del")}
        />
        <Button
          label="÷"
          variant="operators"
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <Button label="7" onPress={() => console.log("7")} />
        <Button label="8" onPress={() => console.log("8")} />
        <Button label="9" onPress={() => console.log("9")} />
        <Button
          label="×"
          variant="operators"
          onPress={() => console.log("*")}
        />
      </View>
      <View style={globalStyles.row}>
        <Button label="4" onPress={() => console.log("4")} />
        <Button label="5" onPress={() => console.log("5")} />
        <Button label="6" onPress={() => console.log("6")} />
        <Button
          label="-"
          variant="operators"
          onPress={() => console.log("-")}
        />
      </View>
      <View style={globalStyles.row}>
        <Button label="1" onPress={() => console.log("1")} />
        <Button label="2" onPress={() => console.log("2")} />
        <Button label="3" onPress={() => console.log("3")} />
        <Button
          label="+"
          variant="operators"
          onPress={() => console.log("+")}
        />
      </View>
      <View style={globalStyles.row}>
        <Button label="0" isZero onPress={() => console.log("0")} />
        <Button label="." onPress={() => console.log(".")} />
        <Button
          label="="
          variant="operators"
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
}
