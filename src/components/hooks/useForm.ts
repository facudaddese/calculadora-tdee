import { useState } from "react";

export const useForm = () => {
  const [input, setInput] = useState({
    edad: 0,
    peso: 0,
    altura: 0,
    actividad: "",
    grasaCorporal: 0,
  });

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return { input, handleInput };
};
