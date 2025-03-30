function Section({ title, children }) {
  return (
    <section className="md:mt-40 mt-20">
      <h2 className="text-center text-orange-300 text-3xl uppercase font-bold tracking-wider">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
