import { useState } from "react";
import type { DataForm } from "../../types/Types";

export const useForm = (initialForm: DataForm) => {
  const [input, setInput] = useState<DataForm>(initialForm);

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const emptyForm = () => {
    setInput({
      age: "",
      weight: "",
      height: "",
      activity: "",
      bodyFat: "",
    });
  };

  return { input, handleInput, emptyForm };
};
