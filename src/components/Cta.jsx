const Cta = () => {
  return (
    <div>
      <section id="cta bg-brightRed">
        <div className="flex flex-col px-6 p-24 space-y-12 items-center justify-between bg-brightRed md:flex-row md:py-12 md:space-y-0">
          <h1 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works
          </h1>

          <a
            href="#"
            className="bg-white text-brightRed p-3 px-6 pt-2 rounded-full baseline shadow-2xl hover:bg-brightRedLight hover:text-white"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cta;
