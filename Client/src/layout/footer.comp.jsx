import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-violet-500 mt-auto p-4 flex flex-col justify-between gap-3">
      <section className="text-slate-200 text-[0.75rem] md:text-[0.9rem]">
        <div>
          Take the post-event survey{" "}
          <NavLink to="/post-event-survey" className="underline cursor-pointer">
            here.
          </NavLink>
          <div>
            For more information related to Evidence for Easter, contact{" "}
            <b>Bradley Poe: (502) 667-6123</b>
          </div>
        </div>
      </section>
      <section className="underline cursor-pointer text-violet-300 text-[0.7rem] md:text-[0.8rem] ms-auto">
        <a href="https://nicolastowery.com" target="_blank">
          Designed and Coded by Nicolas Towery
        </a>
      </section>
    </footer>
  );
}

export default Footer;
