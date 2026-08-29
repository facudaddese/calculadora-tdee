import Goals from "../goals/Goals";

const styleDivs =
  "flex flex-col py-2 justify-center items-center rounded-2xl w-50 h-35";
const styleTitle = "text-[15px] font-semibold";
const styleStrong = "font-extrabold text-[35px]";
const styleSpan = "text-[13px]";

const Results = () => {
  return (
    <section className="flex justify-center items-center flex-col py-10 px-20">
      <h2 className="text-(length:--secondary-text) font-extrabold">
        Tus Resultados
      </h2>
      <div className="flex justify-center items-center flex-wrap p-7 gap-5 w-full md:flex-nowrap">
        {/* TDEE */}
        <div
          className={`${styleDivs} bg-emerald-500/90 border border-emerald-600 text-white`}
        >
          <h3 className={`${styleTitle}`}>TDEE</h3>
          <strong className={`${styleStrong}`}>2280</strong>
          <span className={`${styleSpan} text-gray-100`}>Calorías / Día</span>
        </div>
        {/* IMC */}
        <div
          className={`${styleDivs} bg-indigo-50/20 border border-indigo-300`}
        >
          <h3 className={`${styleTitle} text-gray-600`}>IMC</h3>
          <strong className={`${styleStrong} text-gray-600`}>2280</strong>
          <span className={`${styleSpan} text-indigo-400`}>Normal weight</span>
        </div>
        {/* PESO IDEAL */}
        <div className={`${styleDivs} bg-amber-50/10 border border-amber-300`}>
          <h3 className={`${styleTitle} text-gray-600`}>PESO IDEAL</h3>
          <strong className={`${styleStrong} text-gray-600`}>2280</strong>
          <span className={`${styleSpan} text-amber-400`}>kg</span>
        </div>
      </div>
      {/* Objetivo */}
      <Goals />
    </section>
  );
};

export default Results;
