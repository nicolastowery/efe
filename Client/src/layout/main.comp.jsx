import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home.page";
import Details from "../pages/details.comp";
import SubmitQuestions from "../pages/submit-questions.page";

function Main() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-auto">
      <Routes>
        <Route path="/efe">
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="submit-questions" element={<SubmitQuestions />} />
        </Route>
      </Routes>
    </main>
  );
}

export default Main;
