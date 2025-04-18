import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home.page";
import SubmitQuestions from "../pages/submit-questions/submit-questions.page";
import Footer from "./footer.comp";
import PostEventSurvey from "../pages/post-event-survey/post-event-survey.comp";

function Main() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-auto flex flex-col">
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="submit-questions" element={<SubmitQuestions />} />
          <Route path="post-event-survey" element={<PostEventSurvey />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default Main;
