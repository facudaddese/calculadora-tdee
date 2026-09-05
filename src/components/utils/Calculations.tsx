export function calculateIMC(weight: number, height: number): number {
  return weight / (height / 100) ** 2;
}

export function categoryIMC(imc: number): string {
  if (imc < 18.5) return "Underweight";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Overweight";
  return "Obese";
}

export function calculateBMR(
  gender: "hombre" | "mujer",
  weight: number,
  height: number,
  age: number,
): number {
  return gender === "hombre"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
}

export function calculateTDEE(bmr: number, activity: number): number {
  return bmr * activity;
}

export function calculateIdealWeight(
  height: number,
  gender: "hombre" | "mujer",
) {
  const base = gender === "hombre" ? 50 : 45.5;
  const ideal = base + 2.3 * Math.max(0, height / 2.54 - 60);

  return {
    min: +(ideal * 0.9).toFixed(1),
    max: +(ideal * 1.1).toFixed(1),
  };
}
