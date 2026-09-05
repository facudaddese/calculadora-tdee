const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-15 pb-5 gap-10 bg-emerald-50/40">
      <div className="flex items-center justify-center flex-col gap-5 px-5">
        <h1 className="text-(length:--main-text) text-center font-extrabold text-2xl">
          Calculadora TDEE
        </h1>
        <h2 className="text-(length:--description-text) max-w-150 text-center text-gray-400">
          Calcula tu TDEE gratis con la fórmula Mifflin-St Jeor. Obtén tu BMR,
          calorías diarias y metas de macros para perder grasa, mantenimiento o
          ganar músculo.
        </h2>
      </div>
      <span
        className="material-symbols-outlined animate-bounce text-emerald-400"
        style={{ fontSize: "35px" }}
      >
        keyboard_arrow_down
      </span>
    </header>
  );
};

export default Header;
