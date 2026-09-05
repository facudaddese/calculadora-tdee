import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  type Plugin,
  type ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

interface MacrosChartProps {
  calorias: number;
  proteinas: number;
  grasas: number;
  carbohidratos: number;
}

const COLORS = {
  proteinas: "#10b981",
  grasas: "#f59e0b",
  carbohidratos: "#3b82f6",
};

type CenterTextOptions = ChartOptions<"doughnut"> & {
  plugins: { centerText?: { calorias: number } };
};

const centerTextPlugin: Plugin<"doughnut"> = {
  id: "centerText",
  afterDraw(chart) {
    const { ctx, chartArea } = chart;
    const options = chart.config.options as CenterTextOptions;
    const calorias = options.plugins?.centerText?.calorias ?? 0;

    const { left, right, top, bottom } = chartArea;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = "bold 32px sans-serif";
    ctx.fillStyle = "#111827";
    ctx.fillText(String(calorias), centerX, centerY - 8);

    ctx.font = "600 11px sans-serif";
    ctx.fillStyle = "#9ca3af";
    ctx.fillText("CALORÍAS DIARIAS", centerX, centerY + 16);

    ctx.restore();
  },
};

function BarraMacro({
  nombre,
  gramos,
  porcentaje,
  color,
}: {
  nombre: string;
  gramos: number;
  porcentaje: number;
  color: string;
}) {
  return (
    <div className="flex-1 min-w-35">
      <div className="flex items-center justify-between mb-1">
        <span className="flex items-center gap-1.5 text-sm text-gray-700">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          {nombre}
        </span>
        <span className="text-sm">
          <strong className="font-semibold">{gramos}g</strong>{" "}
          <span className="text-gray-400 text-xs">{porcentaje}%</span>
        </span>
      </div>
      <div className="bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${porcentaje}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

const MacrosChart = ({
  calorias,
  proteinas,
  grasas,
  carbohidratos,
}: MacrosChartProps) => {
  const totalGramos = proteinas + grasas + carbohidratos;
  const pctProteinas = Math.round((proteinas / totalGramos) * 100);
  const pctGrasas = Math.round((grasas / totalGramos) * 100);
  const pctCarbos = Math.round((carbohidratos / totalGramos) * 100);

  const data = {
    labels: ["Proteínas", "Grasas", "Carbohidratos"],
    datasets: [
      {
        data: [proteinas, grasas, carbohidratos],
        backgroundColor: [
          COLORS.proteinas,
          COLORS.grasas,
          COLORS.carbohidratos,
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: CenterTextOptions = {
    cutout: "72%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      centerText: { calorias },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl p-7">
      {/* Donut + leyenda */}
      <div className="flex flex-col items-center gap-4 shrink-0">
        <div className="w-56 h-56">
          <Doughnut
            data={data}
            options={options}
            plugins={[centerTextPlugin]}
          />
        </div>
        <div className="flex gap-4 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Proteínas
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> Grasas
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500" /> Carbohidratos
          </span>
        </div>
      </div>

      {/* Panel de macros */}
      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-bold text-lg text-gray-900">Macros</h3>
        <BarraMacro
          nombre="Proteínas"
          gramos={proteinas}
          porcentaje={pctProteinas}
          color={COLORS.proteinas}
        />
        <BarraMacro
          nombre="Grasas"
          gramos={grasas}
          porcentaje={pctGrasas}
          color={COLORS.grasas}
        />
        <BarraMacro
          nombre="Carbohidratos"
          gramos={carbohidratos}
          porcentaje={pctCarbos}
          color={COLORS.carbohidratos}
        />
        <p className="text-xs italic text-gray-400 mt-1">
          * Basado en una dieta moderada en carbohidratos. Puedes ajustar las
          proporciones según tus preferencias.
        </p>
      </div>
    </div>
  );
};

export default MacrosChart;
