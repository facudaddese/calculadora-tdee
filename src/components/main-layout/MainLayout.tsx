import Form from "../form/Form";
import { useCalculator } from "../hooks/useCalculator";
import Results from "../results/Results";

const MainLayout = () => {
  const { state, dispatchCalculate, dispatchReset } = useCalculator();

  return (
    <main className="bg-gray-50/50">
      <Form
        state={state.data}
        dispatchCalculate={dispatchCalculate}
        dispatchReset={dispatchReset}
      />
      <Results results={state.result} />
    </main>
  );
};

export default MainLayout;
