type Objetivo = "bajar" | "mantener" | "subir";

interface GoalsProps {
  objetivo: Objetivo;
  onChange: (objetivo: Objetivo) => void;
}

const styleBtn =
  "font-bold rounded-2xl py-3 px-5 cursor-pointer w-full md:w-45";

const Goals = ({ objetivo, onChange }: GoalsProps) => {
  return (
    <section className="py-7 text-center px-5">
      <h3 className="text-gray-500/80 font-semibold">Elige tu objetivo</h3>
      <div className="flex items-center justify-around flex-wrap my-5 p-3 gap-5 rounded-2xl bg-gray-200/40 md:flex-nowrap">
        <button
          onClick={() => onChange("bajar")}
          className={`${styleBtn} ${objetivo === "bajar" ? "border border-red-400 bg-red-100 text-red-600" : "text-gray-400 hover:border hover:border-red-300"}`}
        >
          Perder peso
        </button>
        <button
          onClick={() => onChange("mantener")}
          className={`${styleBtn} ${objetivo === "mantener" ? "border border-emerald-500 bg-emerald-100 text-emerald-700" : "text-gray-400 hover:border hover:border-emerald-400"}`}
        >
          Mantener
        </button>
        <button
          onClick={() => onChange("subir")}
          className={`${styleBtn} ${objetivo === "subir" ? "border border-indigo-400 bg-indigo-100 text-indigo-500" : "text-gray-400 hover:border hover:border-indigo-300"}`}
        >
          Ganar músculo
        </button>
      </div>
    </section>
  );
};

export default Goals;
