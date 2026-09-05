import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../../reducers/useReducer";
import type { Data, State } from "../../types/Types";

export const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const stored = localStorage.getItem("form");
    return stored ? (JSON.parse(stored) as State) : initialState;
  });

  const dispatchCalculate = (payload: Data) => {
    dispatch({
      type: "calculate",
      payload,
    });
  };

  const dispatchReset = () => {
    dispatch({ type: "reset" });
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(state));
  }, [state]);

  return { state, dispatchCalculate, dispatchReset };
};
