function Footer() {
  return (
    <footer className="bg-violet-500 mt-auto p-4 flex flex-col justify-between gap-3">
      <section className="text-slate-200 text-[0.8rem] md:text-[0.8rem]">
        For more information related to Evidence for Easter, contact us at:{" "}
        <b>270-555-1234</b>
      </section>
      <section className="underline cursor-pointer text-violet-300 text-[0.7rem] md:text-[0.8rem]">
        <a href="https://nicolastowery.com" target="_blank">
          Designed and Coded by Nicolas Towery
        </a>
      </section>
    </footer>
  );
}

export default Footer;
