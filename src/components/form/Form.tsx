import { useState } from "react";
import { useForm } from "../hooks/useForm";

const styleGender =
  "text-center border border-gray-300 rounded-2xl p-5 w-full cursor-pointer bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50";
const styleInput =
  "my-3 p-2 border border-gray-200 rounded-[7px] w-full focus:outline-none focus:border-emerald-400 y-300";
const styleDiv = "flex flex-col";
const styleLabel = "text-gray-500/80 font-semibold";

const Form = () => {
  const [view, setView] = useState(false);
  const { input, handleInput } = useForm();
  const { edad, peso, altura, actividad, grasaCorporal } = input;

  const options = [
    { id: 1, value: "", label: "Elija una opción" },
    { id: 2, value: 1.2, label: "Sedentario (trabajo de oficina)" },
    { id: 3, value: 1.375, label: "Ejercicio Ligero (1-2 días/semana)" },
    { id: 4, value: 1.55, label: "Ejercicio Moderado (3-5 días/semana)" },
    { id: 5, value: 1.725, label: "Ejercicio Intenso (6-7 días/semana)" },
    { id: 6, value: 1.9, label: "Muy Activo (2x por día)" },
    { id: 7, value: 2.3, label: "Atleta Élite (Profesional)" },
  ];

  return (
    <section className="flex items-center justify-center py-10 px-5">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="border border-gray-100 bg-white rounded-2xl p-7 max-w-150"
      >
        {/* Genero */}
        <label className={styleLabel}>Género</label>
        <div className="flex items-center justify-center gap-5 pt-3">
          <div className={styleGender}>
            <span className="material-symbols-outlined">female</span>
            <p>Mujer</p>
          </div>
          <div className={styleGender}>
            <span className="material-symbols-outlined">male</span>
            <p>Hombre</p>
          </div>
        </div>
        {/* Edad - Peso - Altura */}
        <div className="flex gap-5 py-7">
          <div className={styleDiv}>
            <label htmlFor="edad" className={styleLabel}>
              Edad
            </label>
            <input
              id="edad"
              name="edad"
              value={edad}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 26"
              className={styleInput}
            />
          </div>
          <div className={styleDiv}>
            <label htmlFor="peso" className={styleLabel}>
              Peso (kg)
            </label>
            <input
              id="peso"
              name="peso"
              value={peso}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 90"
              className={styleInput}
            />
          </div>
          <div className={styleDiv}>
            <label htmlFor="altura" className={styleLabel}>
              Altura (cm)
            </label>
            <input
              id="altura"
              name="altura"
              value={altura}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 180"
              className={styleInput}
            />
          </div>
        </div>
        {/* Nivel de actividad */}
        <div className={styleDiv}>
          <label htmlFor="actividad" className={styleLabel}>
            Nivel de actividad
          </label>
          <select
            id="actividad"
            name="actividad"
            value={actividad}
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
        {/* Grasa corporal */}
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
            <label htmlFor="grasaCorporal" className={styleLabel}>
              Grasa corporal (%)
            </label>
            <input
              id="grasaCorporal"
              name="grasaCorporal"
              value={grasaCorporal}
              onChange={handleInput}
              type="number"
              placeholder="Ej: 15"
              className={`${styleInput} mb-7`}
            />
          </div>
        )}
        <button className="bg-emerald-500 rounded-[10px] p-1.5 w-full cursor-pointer text-white font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-emerald-600">
          Calcular TDEE
        </button>
      </form>
    </section>
  );
};

export default Form;
