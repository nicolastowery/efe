function Section({ title, children }) {
  return (
    <section className="mb-40 mt-10">
      <h2 className="text-center text-orange-300  text-2xl md:text-3xl uppercase font-bold tracking-wider leading-6 mb-3 md:mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
