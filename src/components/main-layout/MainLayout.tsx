import { useReducer } from "react";
import { initialState, reducer } from "../../reducers/useReducer";
import Form from "../form/Form";
import Results from "../results/Results";

const MainLayout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="bg-gray-50/50">
      <Form dispatch={dispatch} />
      <Results results={state.result} />
    </main>
  );
};

export default MainLayout;
