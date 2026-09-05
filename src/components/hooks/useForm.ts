import { useState } from "react";
import type { DataForm } from "../../types/Types";

export const useForm = (
  initialForm = { age: "", weight: "", height: "", activity: "", bodyFat: "" },
) => {
  const [input, setInput] = useState<DataForm>(initialForm);

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return { input, setInput, handleInput };
};
