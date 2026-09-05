import type { ResultsData } from "../../types/Types";
import Goals from "../goals/Goals";

const styleDivs =
  "flex flex-col py-2 justify-center items-center rounded-2xl w-55 h-37";
const styleTitle = "text-[15px] font-semibold";
const styleStrong = "font-extrabold text-[35px] text-center";
const styleSpan = "text-[13px]";

interface ResultsProps {
  results: ResultsData | null;
}

const Results = ({ results }: ResultsProps) => {
  return (
    results && (
      <section className="flex justify-center items-center flex-col py-7">
        <h2 className="text-(length:--secondary-text) font-extrabold">
          Tus Resultados
        </h2>
        <div className="flex justify-center items-center flex-wrap p-7 gap-5 w-full md:flex-nowrap">
          {/* TDEE */}
          <div
            className={`${styleDivs} bg-emerald-500/90 border border-emerald-600 text-white`}
          >
            <h3 className={`${styleTitle}`}>TDEE</h3>
            <strong className={`${styleStrong}`}>
              {Math.round(results.tdee)}
            </strong>
            <span className={`${styleSpan} text-gray-100`}>Calorías / Día</span>
          </div>
          {/* IMC */}
          <div
            className={`${styleDivs} border ${results.categoryImc === "Obese" ? "text-red-400 bg-red-200/20" : results.categoryImc === "Overweight" ? "text-amber-400 bg-amber-200/20" : results.categoryImc === "Normal" ? "text-green-400 bg-green-200/20" : results.categoryImc === "Underweight" && "text-orange-400 bg-orange-200/20"}`}
          >
            <h3 className={`${styleTitle} text-gray-600`}>IMC</h3>
            <strong className={`${styleStrong} text-gray-600`}>
              {Math.round(results.imc)}
            </strong>
            <span
              className={`${styleSpan} ${results.categoryImc === "Obese" ? "text-red-600 " : results.categoryImc === "Overweight" ? "text-amber-600 " : results.categoryImc === "Normal" ? "text-green-600 " : results.categoryImc === "Underweight" && "text-orange-400 "} `}
            >
              {results.categoryImc}
            </span>
          </div>
          {/* Ideal weight */}
          <div
            className={`${styleDivs} border-violet-300 bg-violet-100/20 border`}
          >
            <h3 className={`${styleTitle} text-violet-500`}>PESO IDEAL</h3>
            <strong
              className={`${styleStrong} text-gray-600`}
            >{`${results.idealWeight.min.toFixed(1)} - ${results.idealWeight.max.toFixed(1)}`}</strong>
            <span className={`${styleSpan} text-violet-500`}>kg</span>
          </div>
        </div>
        {/* Goals */}
        <Goals />
      </section>
    )
  );
};

export default Results;
