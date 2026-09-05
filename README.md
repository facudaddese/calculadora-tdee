
# Calculadora de Calorías (TDEE)

Aplicación web que calcula el Gasto Energético Total Diario (TDEE), el Índice de Masa Corporal (IMC) y el peso ideal a partir del género, edad, peso, altura y actividad física del usuario, mostrando además una recomendación de macronutrientes según el objetivo elegido (perder peso, mantener o ganar músculo). [Ver sitio](https://calculadora-tdee.vercel.app/)


## Funcionalidades

-   Formulario con validación en tiempo real (género, edad, peso, altura, nivel de actividad y, opcionalmente, porcentaje de grasa corporal).
-   Cálculo de **BMR** (Tasa Metabólica Basal) con la fórmula de **Mifflin-St Jeor**.
-   Cálculo de **TDEE** aplicando el factor de actividad física (sedentario a atleta de élite).
-   Cálculo de **IMC** con categorización (peso bajo, normal, sobrepeso, obesidad).
-   Cálculo de **peso ideal** (fórmula de Devine).
-   Selector de **objetivo** (perder peso / mantener / ganar músculo) que ajusta las calorías finales (±500 kcal) y recalcula los macronutrientes en vivo.
-   Gráfico de **macros** (donut interactivo con Chart.js) con desglose de proteínas, grasas y carbohidratos en gramos y porcentaje.
-   **Persistencia en localStorage**: los resultados del último cálculo se mantienen al recargar la página.
-   Opción de **limpiar** el formulario y reiniciar el estado.

## Stack

-   **React** + **TypeScript**
-   **useReducer** para el manejo del estado de cálculo
-   **Custom hooks** (`useForm`, `useCalculator`) para separar la lógica de UI del estado
-   **Tailwind CSS v4**
-   **Chart.js** + **react-chartjs-2** para el gráfico de macros (con un plugin custom para renderizar el texto centrado dentro del donut)
-   **localStorage** para persistencia sin backend

## Autor

**Facundo D'addese** - Estudiante de Licenciatura en Sistemas – Universidad Nacional de Lanús.

[CV](https://drive.google.com/file/d/1dplrGFP7DhLXLQCuj2sA-66sAV0yER_g/view?usp=sharing) | [facundo.daddese19@gmail.com](mailto:facundo.daddese@gmail.com)
