import negate from "../assets/icons/negate.png";
import reset from "../assets/icons/reset.png";

type CalcKeys = {
    id : string,
    value : string|number;
}

export const numberKeys = [
    {
      id: "number-7",
      value: 7
    },
    {
      id: "number-8",
      value: 8
    },
    {
      id: "number-9",
      value: 9
    },
    {
      id: "number-4",
      value: 4
    },
    {
      id: "number-5",
      value: 5
    },
    {
      id: "number-6",
      value: 6
    },
    {
      id: "number-1",
      value: 1
    },
    {
      id: "number-2",
      value: 2
    },
    {
      id: "number-3",
      value: 3
    },
    {
      id: "backspace icon",
      value: reset
    },
    {
      id: "number-0",
      value: "0"
    },
    {
      id: "decimal",
      value: "."
    },
  ] as CalcKeys[];

export const specialOperators = [
    {
        id : "AC",
        value : "AC"
    },
    {
        id : "negate icon",
        value : negate
    },
    {
        id : "modulo",
        value : "%"
    }
] as CalcKeys[];

export const operators = [
    {
      id : "divide",
      value : "/"
    },
    {
      id : "multiply",
      value : "x"
    },
    {
      id : "substract",
      value : "-"
    },
    {
      id : "add",
      value : "+"
    },
    {
      id : "equal",
      value : "="
    }
  ] as CalcKeys[];