import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function PostEventSurvey() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    if (e.target.value === null || e.target.value === "") return;

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_SURVEY_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    );

    setSubmitted(true);
  };
  return (
    <div className="p-10 md:p-20  flex justify-center">
      {!submitted ? (
        <div className="max-w-4xl">
          <h1 className="text-center text-violet-500 tracking-tight text-4xl md:text-8xl leading-8 mb-2 md:mb-4 md:leading-19 font-bold uppercase first">
            Post-Event Survey
          </h1>
          <h2 className="mb-4 md:mb-8 md:text-1xl font-semibold second leading-5 md:leading-6 italic opacity-50 text-center">
            Thank you for attending Evidence for Easter. Please share your
            thoughts below.
          </h2>
          <form
            ref={form}
            className="flex flex-col justify-center items-center gap-8 third"
            onSubmit={onClick}
          >
            <div className="mb-5 md:mb-10">
              <label
                htmlFor="q1"
                className="mb-4 md:mb-8 md:text-2xl font-semibold second leading-5 md:leading-6"
              >
                What insight or key takeaway from Dr. Sims' presentation had the
                most impact on you personally?
              </label>
              <textarea
                name="q1"
                className="border-1 border-violet-500 rounded-sm resize-none h-40 md:h-55 w-[100%] outline-0 p-5 mt-3 md:mt-6"
              />
            </div>
            <div className="mb-5 md:mb-10">
              <label
                htmlFor="q2"
                className="mb-4 md:mb-8 md:text-2xl font-semibold second leading-5 md:leading-6"
              >
                How would you describe Dr. Sims' approach to answering questions
                during the Q&A session?
              </label>
              <textarea
                name="q2"
                className="border-1 border-violet-500 rounded-sm resize-none h-40 md:h-55 w-[100%] outline-0 p-5 mt-3 md:mt-6"
              />
            </div>
            <div className="mb-5 md:mb-10">
              <label
                htmlFor="q3"
                className="mb-4 md:mb-8 md:text-2xl font-semibold second leading-5 md:leading-6"
              >
                Are there specific topics or themes you'd like us to explore in
                future events?
              </label>
              <textarea
                name="q3"
                className="border-1 border-violet-500 rounded-sm resize-none h-40 md:h-55 w-[100%] outline-0 p-5 mt-3 md:mt-6"
              />
            </div>
            <div className="mb-5 md:mb-10">
              <label
                htmlFor="q4"
                className="mb-4 md:mb-8 md:text-2xl font-semibold second leading-5 md:leading-6"
              >
                What changes or suggestions do you have to improve events like
                Evidence for Easter moving forward?
              </label>
              <textarea
                name="q4"
                className="border-1 border-violet-500 rounded-sm resize-none h-40 md:h-55 w-[100%] outline-0 p-5 mt-3 md:mt-6"
              />
            </div>
            <button
              type="submit"
              className="uppercase md:tracking-wide text-2xl md:text-4xl submit px-6 leading-7 md:leading-11 p-3 md:p-4 rounded-[999px] md:w-60 cursor-pointer bg-violet-500"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-4xl">
          <h1 className="text-center text-violet-500 tracking-tight text-4xl md:text-8xl leading-8 mb-2 md:mb-4 md:leading-19 font-bold uppercase first">
            Survey Submitted
          </h1>
          <h2 className="mb-4 md:mb-8 md:text-2xl font-semibold second leading-5 md:leading-6">
            Thank you for taking the time to fill out the post-event survey!
            This will help make the event better for next year.
          </h2>
        </div>
      )}
    </div>
  );
}

export default PostEventSurvey;
