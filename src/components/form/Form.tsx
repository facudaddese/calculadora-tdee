const styleGender =
  "text-center border border-gray-300 rounded-2xl p-5 w-full cursor-pointer bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50";
const styleInput =
  "my-3 p-2 border border-gray-200 rounded-[7px] w-full focus:outline-none focus:border-emerald-400";
const styleDiv = "flex flex-col";
const styleLabel = "text-gray-500/80 font-semibold";

const Form = () => {
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
            <input id="edad" type="number" className={styleInput} />
          </div>
          <div className={styleDiv}>
            <label htmlFor="peso" className={styleLabel}>
              Peso (kg)
            </label>
            <input id="peso" type="number" className={styleInput} />
          </div>
          <div className={styleDiv}>
            <label htmlFor="altura" className={styleLabel}>
              Altura (cm)
            </label>
            <input id="altura" type="number" className={styleInput} />
          </div>
        </div>
        {/* Nivel de actividad */}
        <div className={styleDiv}>
          <label htmlFor="nivel-actividad" className={styleLabel}>
            Nivel de actividad
          </label>
          <select id="nivel-actividad" className={styleInput}>
            <option value="">Elija una opción</option>
            <option value="1.2">Sedentario (trabajo de oficina)</option>
            <option value="1.375">Ejercicio Ligero (1-2 días/semana)</option>
            <option value="1.55">Ejercicio Moderado (3-5 días/semana)</option>
            <option value="1.725">Ejercicio Intenso (6-7 días/semana)</option>
            <option value="1.9">Muy Activo (2x por día)</option>
            <option value="2.3">Atleta Élite (Profesional)</option>
          </select>
        </div>
        {/* Grasa corporal */}
        <div className="flex pt-7 pb-5">
          <input id="grasa-corporal" type="checkbox" />
          <label
            htmlFor="grasa-corporal"
            className={`${styleLabel} pl-2 text-[13px]`}
          >
            Conozco mi porcentaje de grasa corporal
          </label>
        </div>
        <div className={styleDiv}>
          <label htmlFor="grasa" className={styleLabel}>
            Grasa corporal (%)
          </label>
          <input id="grasa" type="number" className={`${styleInput} mb-7`} />
        </div>
        <button className="bg-emerald-500 rounded-[10px] p-1.5 w-full cursor-pointer text-white font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-emerald-600">
          Calcular TDEE
        </button>
      </form>
    </section>
  );
};

export default Form;
