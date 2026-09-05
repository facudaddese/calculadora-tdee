import { useEffect, useRef, useState } from "react";
import type { ResultsData } from "../../types/Types";
import { calculateMacros } from "../utils/Calculations";
import Goals from "../goals/Goals";
import MacrosChart from "../macros-chart/MacrosChart";

type Objetivo = "bajar" | "mantener" | "subir";

const AJUSTE: Record<Objetivo, number> = {
  bajar: -500,
  mantener: 0,
  subir: 500,
};

const styleDivs =
  "flex flex-col py-2 justify-center items-center rounded-2xl w-60 h-37";
const styleTitle = "text-[15px] font-semibold text-center";
const styleStrong = "font-extrabold text-[35px] text-center";
const styleSpan = "text-[13px] text-center";

interface ResultsProps {
  results: ResultsData | null;
}

const Results = ({ results }: ResultsProps) => {
  const [objetivo, setObjetivo] = useState<Objetivo>(() => {
    const stored = localStorage.getItem("objetivo");
    return stored ? (JSON.parse(stored) as Objetivo) : "mantener";
  });
  const resultsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    localStorage.setItem("objetivo", JSON.stringify(objetivo));
  }, [objetivo]);

  useEffect(() => {
    if (results) {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [results]);

  return (
    results && (
      <section
        ref={resultsRef}
        className="flex justify-center items-center flex-col py-7"
      >
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
            className={`${styleDivs} border ${results.categoryImc === "Obesidad" ? "text-red-400 bg-red-100/10" : results.categoryImc === "Sobrepeso" ? "text-amber-400 bg-amber-100/10" : results.categoryImc === "Normal" ? "text-green-400 bg-green-100/10" : results.categoryImc === "Underweight" && "text-blue-400 bg-blue-100/10"}`}
          >
            <h3
              className={`${styleTitle} ${results.categoryImc === "Obesidad" ? "text-red-600 " : results.categoryImc === "Sobrepeso" ? "text-amber-600 " : results.categoryImc === "Normal" ? "text-green-600 " : results.categoryImc === "Underweight" && "text-blue-400 "}`}
            >
              IMC
            </h3>
            <strong className={`${styleStrong} text-gray-600`}>
              {Math.round(results.imc)}
            </strong>
            <span
              className={`${styleSpan} ${results.categoryImc === "Obesidad" ? "text-red-600 " : results.categoryImc === "Sobrepeso" ? "text-amber-600 " : results.categoryImc === "Normal" ? "text-green-600 " : results.categoryImc === "Underweight" && "text-blue-400 "} `}
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
            >{`${results.idealWeight.min.toFixed(1)}-${results.idealWeight.max.toFixed(1)}`}</strong>
            <span className={`${styleSpan} text-violet-500`}>kg</span>
          </div>
        </div>
        {/* Goals */}
        <Goals objetivo={objetivo} onChange={setObjetivo} />
        {/* Macros */}
        {(() => {
          const caloriasObjetivo = Math.round(results.tdee) + AJUSTE[objetivo];
          const macros = calculateMacros(caloriasObjetivo);
          return (
            <div className="w-full max-w-3xl px-5">
              <MacrosChart
                calorias={caloriasObjetivo}
                proteinas={macros.proteinas}
                grasas={macros.grasas}
                carbohidratos={macros.carbohidratos}
              />
            </div>
          );
        })()}
      </section>
    )
  );
};

export default Results;
