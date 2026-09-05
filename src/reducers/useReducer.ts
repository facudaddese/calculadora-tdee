import {
  calculateBMR,
  calculateIdealWeight,
  calculateIMC,
  calculateTDEE,
  categoryIMC,
} from "../components/utils/Calculations";
import type { Data, State } from "../types/Types";

export type Action = { type: "calculate"; payload: Data } | { type: "reset" };

export const initialState: State = {
  data: {
    gender: "hombre",
    age: "",
    weight: "",
    height: "",
    activity: "",
    bodyFat: "",
  },
  result: null,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "calculate": {
      const { weight, height, age, activity, gender } = action.payload;

      const calculateImc = calculateIMC(Number(weight), Number(height));
      const calculateBmr = calculateBMR(
        gender,
        Number(weight),
        Number(height),
        Number(age),
      );
      const calculateTdee = calculateTDEE(calculateBmr, Number(activity));
      const calculateIdealW = calculateIdealWeight(Number(height), gender);

      return {
        data: action.payload,
        result: {
          tdee: calculateTdee,
          imc: calculateImc,
          categoryImc: categoryIMC(calculateImc),
          idealWeight: calculateIdealW,
        },
      };
    }
    case "reset":
      return initialState;
    default:
      return state;
  }
};
