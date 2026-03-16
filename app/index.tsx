import { Button, ThemeText } from "@/components";
import { useCalculator } from "@/hooks";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

export default function Index() {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.container}>
      {/* Results */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Buttons */}
      <View style={globalStyles.row}>
        <Button label="C" variant="controls" onPress={clean} />
        <Button label="+/-" variant="controls" onPress={toggleSign} />
        <Button label="del" variant="controls" onPress={deleteLast} />
        <Button label="÷" variant="operators" onPress={divideOperation} />
      </View>
      <View style={globalStyles.row}>
        <Button label="7" onPress={() => buildNumber("7")} />
        <Button label="8" onPress={() => buildNumber("8")} />
        <Button label="9" onPress={() => buildNumber("9")} />
        <Button label="×" variant="operators" onPress={multiplyOperation} />
      </View>
      <View style={globalStyles.row}>
        <Button label="4" onPress={() => buildNumber("4")} />
        <Button label="5" onPress={() => buildNumber("5")} />
        <Button label="6" onPress={() => buildNumber("6")} />
        <Button label="-" variant="operators" onPress={subtractOperation} />
      </View>
      <View style={globalStyles.row}>
        <Button label="1" onPress={() => buildNumber("1")} />
        <Button label="2" onPress={() => buildNumber("2")} />
        <Button label="3" onPress={() => buildNumber("3")} />
        <Button label="+" variant="operators" onPress={addOperation} />
      </View>
      <View style={globalStyles.row}>
        <Button label="0" isZero onPress={() => buildNumber("0")} />
        <Button label="." onPress={() => buildNumber(".")} />
        <Button label="=" variant="operators" onPress={calculateResult} />
      </View>
    </View>
  );
}
