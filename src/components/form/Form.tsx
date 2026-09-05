import { useState } from "react";
import { useForm } from "../hooks/useForm";
import type { Activity, Data, DataForm, Gender } from "../../types/Types";

const styleGender = "text-center border rounded-2xl p-5 w-full cursor-pointer";
const styleInput =
  "my-3 p-2 border border-gray-200 rounded-[7px] w-full focus:outline-none focus:border-emerald-500 y-300";
const styleDiv = "flex flex-col w-full";
const styleLabel = "text-gray-500/80 font-semibold text-[14px]";

interface FormProps {
  state: Data | null;
  dispatchCalculate: (payload: Data) => void;
  dispatchReset: () => void;
}

const Form = ({ state, dispatchCalculate, dispatchReset }: FormProps) => {
  const [view, setView] = useState(false);
  const [gender, setGender] = useState<Gender>(state?.gender ?? "");
  const initialForm: DataForm = {
    age: state?.age ?? "",
    weight: state?.weight ?? "",
    height: state?.height ?? "",
    activity: state?.activity ?? "",
    bodyFat: state?.bodyFat ?? "",
  };
  const { input, handleInput, emptyForm } = useForm(initialForm);
  const { age, weight, height, activity, bodyFat } = input;

  const isInvalid = () => {
    return (
      gender === "" ||
      Number(age) <= 0 ||
      Number(weight) <= 0 ||
      Number(height) <= 0 ||
      activity === "" ||
      (view && Number(bodyFat) <= 0)
    );
  };

  const options: Activity[] = [
    { id: 1, value: "", label: "Elija una opción" },
    { id: 2, value: "1.2", label: "Sedentario (trabajo de oficina)" },
    { id: 3, value: "1.375", label: "Ejercicio Ligero (1-2 días/semana)" },
    { id: 4, value: "1.55", label: "Ejercicio Moderado (3-5 días/semana)" },
    { id: 5, value: "1.725", label: "Ejercicio Intenso (6-7 días/semana)" },
    { id: 6, value: "1.9", label: "Muy Activo (2x por día)" },
    { id: 7, value: "2.3", label: "Atleta Élite (Profesional)" },
  ];

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (gender !== "") {
      dispatchCalculate({ gender, age, weight, height, activity, bodyFat });
    }
  };

  const handleReset = () => {
    setGender("");
    setView(false);
    emptyForm();
    dispatchReset();
  };

  return (
    <section className="flex items-center justify-center py-7 px-5">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-100 bg-white rounded-2xl p-7 max-w-160"
      >
        <div className="flex justify-between items-center">
          {/* gender */}
          <label className={styleLabel}>Género</label>
          <span
            className="text-[13px] underline text-indigo-500 cursor-pointer"
            onClick={handleReset}
          >
            Limpiar
          </span>
        </div>
        <div className="flex gap-5 pt-3">
          <label
            className={`${styleGender} peer-checked:border-emerald-600 peer-checked:bg-emerald-50 border-gray-300 bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50 has-checked:border-emerald-600 has-checked:bg-emerald-50`}
          >
            <input
              type="radio"
              name="gender"
              value="hombre"
              checked={gender === "hombre"}
              onChange={() => setGender("hombre")}
              className="sr-only"
            />
            <span className="material-symbols-outlined">male</span>
            <p>Hombre</p>
          </label>
          <label
            className={`${styleGender} peer-checked:border-emerald-600 peer-checked:bg-emerald-50 border-gray-300 bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50 has-checked:border-emerald-600 has-checked:bg-emerald-50`}
          >
            <input
              type="radio"
              name="gender"
              value="mujer"
              checked={gender === "mujer"}
              onChange={() => setGender("mujer")}
              className="sr-only"
            />
            <span className="material-symbols-outlined">female</span>
            <p>Mujer</p>
          </label>
        </div>
        {/* age - weight - height */}
        <div className="flex gap-5 py-7 flex-wrap md:flex-nowrap">
          <div className={styleDiv}>
            <label htmlFor="age" className={styleLabel}>
              Edad
            </label>
            <input
              id="age"
              name="age"
              value={age}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 26"
              className={styleInput}
            />
          </div>
          <div className={styleDiv}>
            <label htmlFor="weight" className={styleLabel}>
              Peso (kg)
            </label>
            <input
              id="weight"
              name="weight"
              value={weight}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 90"
              className={styleInput}
            />
          </div>
          <div className={styleDiv}>
            <label htmlFor="height" className={styleLabel}>
              Altura (cm)
            </label>
            <input
              id="height"
              name="height"
              value={height}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 180"
              className={styleInput}
            />
          </div>
        </div>
        {/* activity level */}
        <div className={styleDiv}>
          <label htmlFor="activity" className={styleLabel}>
            Nivel de actividad
          </label>
          <select
            id="activity"
            name="activity"
            value={activity}
            onChange={handleInput}
            className={styleInput}
          >
            {options.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        {/* body fat */}
        <div className="flex pt-7 pb-5">
          <input
            id="grasa-corporal"
            type="checkbox"
            checked={view}
            onChange={(e) => setView(e.target.checked)}
          />
          <label
            htmlFor="grasa-corporal"
            className={`${styleLabel} pl-2 text-[13px]`}
          >
            Conozco mi porcentaje de grasa corporal
          </label>
        </div>
        {view && (
          <div className={styleDiv}>
            <label htmlFor="bodyFat" className={styleLabel}>
              Grasa corporal (%)
            </label>
            <input
              id="bodyFat"
              name="bodyFat"
              value={bodyFat}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 15"
              className={`${styleInput} mb-7`}
            />
          </div>
        )}
        <button
          className={`bg-emerald-500 rounded-[10px] p-1.5 w-full text-white font-semibold disabled:opacity-25 ${isInvalid() ? "cursor-not-allowed" : "cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-emerald-600"}`}
          disabled={isInvalid()}
        >
          Calcular TDEE
        </button>
      </form>
    </section>
  );
};

export default Form;
