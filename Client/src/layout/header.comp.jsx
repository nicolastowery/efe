import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const activePath = location.pathname;
  console.log(activePath);
  return (
    <header>
      <nav>
        <ul className="lowercase tracking-tight flex justify-center md:justify-end items-center gap-10 md:gap-20 h-[50px] px-8 py-4">
          <li>
            <NavLink
              to="/"
              className={`${
                activePath !== "/details" && activePath !== "/submit-questions"
                  ? "text-slate-100 border-b-2"
                  : "hover:text-slate-100 text-slate-300 border-slate-100"
              } hover:border-b-2 border-slate-100`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/details"
              className={`${
                activePath === "/details"
                  ? "text-slate-100 border-b-2"
                  : "hover:text-slate-100 text-slate-300 border-slate-100"
              } hover:border-b-2 border-slate-100`}
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submit-questions"
              className={`${
                activePath === "/submit-questions"
                  ? "text-slate-100 border-b-2"
                  : "hover:text-slate-100 text-slate-300 border-slate-100"
              } hover:border-b-2 border-slate-100`}
            >
              Submit Questions
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
