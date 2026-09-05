export interface Activity {
  id: number;
  value: string;
  label: string;
}

export type DataForm = {
  age: string;
  weight: string;
  height: string;
  activity: string;
  bodyFat?: string;
};

export type Gender = "hombre" | "mujer" | "";

export interface Data extends DataForm {
  gender: Gender;
}

export type ResultsData = {
  tdee: number;
  imc: number;
  categoryImc: string;
  idealWeight: { min: number; max: number };
  macros: { proteinas: number; grasas: number; carbohidratos: number };
};

export interface State {
  data: Data;
  result: ResultsData | null;
}
