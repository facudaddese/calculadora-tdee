const styleBtn =
  "border border-white bg-white rounded-2xl py-2 px-5 cursor-pointer w-full md:w-40";

const Goals = () => {
  return (
    <section className="py-7 text-center px-5">
      <h3 className="text-gray-500/80 font-semibold">Elige tu objetivo</h3>
      <div className="flex items-center justify-around flex-wrap my-5 p-3 gap-5 rounded-2xl bg-gray-100/50 md:flex-nowrap">
        <button
          className={`${styleBtn} text-red-600 hover:border hover:border-red-300`}
        >
          Perder peso
        </button>
        <button
          className={`${styleBtn} text-emerald-700 hover:border hover:border-emerald-400`}
        >
          Mantener
        </button>
        <button
          className={`${styleBtn} text-indigo-500 hover:border hover:border-indigo-300`}
        >
          Ganar músculo
        </button>
      </div>
    </section>
  );
};

export default Goals;
