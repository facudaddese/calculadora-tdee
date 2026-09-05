import type { Gender } from "../../types/Types";

export function calculateIMC(weight: number, height: number): number {
  return weight / (height / 100) ** 2;
}

export function categoryIMC(imc: number): string {
  if (imc < 18.5) return "Peso bajo";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidad";
}

export function calculateBMR(
  gender: Gender,
  weight: number,
  height: number,
  age: number,
): number {
  return gender === "hombre"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : gender === "mujer"
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 0;
}

export function calculateTDEE(bmr: number, activity: number): number {
  return bmr * activity;
}

export function calculateIdealWeight(height: number, gender: Gender) {
  const base = gender === "hombre" ? 50 : gender === "mujer" ? 45.5 : 0;
  const ideal = base + 2.3 * Math.max(0, height / 2.54 - 60);

  return {
    min: +(ideal * 0.9).toFixed(1),
    max: +(ideal * 1.1).toFixed(1),
  };
}

export function calculateMacros(calorias: number) {
  const proteinas = Math.round((calorias * 0.3) / 4);
  const grasas = Math.round((calorias * 0.35) / 9);
  const carbohidratos = Math.round((calorias * 0.35) / 4);

  return { proteinas, grasas, carbohidratos };
}
