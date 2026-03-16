import { useCallback, useEffect, useMemo, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "×",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");

  const lastOperation = useRef<Operator | undefined>(undefined);
  const isWaitingForOperand = useRef(false);

  const clean = () => {
    setNumber("0");
    setFormula("0");
    lastOperation.current = undefined;
    isWaitingForOperand.current = false;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const calculateSubResult = useCallback(() => {
    const [firstValue, operation, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  }, [formula]);

  // Derived synchronously from formula — no state lag, no flicker
  const prevNumber = useMemo(
    () => `${calculateSubResult()}`,
    [calculateSubResult]
  );

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    isWaitingForOperand.current = false;
  };

  const setLastNumber = () => {
    calculateResult();
    setNumber("0");
    isWaitingForOperand.current = true;
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        isWaitingForOperand.current = false;
        return setNumber(number + numberString);
      }

      if (numberString === "0" && number.includes(".")) {
        isWaitingForOperand.current = false;
        return setNumber(number + numberString);
      }

      if (numberString !== "0" && !number.includes(".")) {
        isWaitingForOperand.current = false;
        return setNumber(numberString);
      }

      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    isWaitingForOperand.current = false;
    setNumber(number + numberString);
  };

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      if (isWaitingForOperand.current) {
        // Don't include "0" in formula until user starts typing the second operand
        setFormula(`${firstFormulaPart} ${lastOperation.current}`);
      } else {
        setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
      }
    } else {
      setFormula(number);
    }
  }, [number, formula, calculateSubResult]);

  return {
    // Props
    formula,
    number,
    prevNumber,
    // Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
