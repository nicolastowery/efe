import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function SubmitQuestions() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    if (e.target.value === null || e.target.value === "") return;

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
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
            Submit Questions
          </h1>
          <h2 className="mb-4 md:mb-8 md:text-2xl font-semibold second leading-5 md:leading-6">
            Enter your questions for the upcoming Q&A session, and Dr. Sims will
            do his best to answer your questions!
          </h2>
          <form
            ref={form}
            className="flex flex-col justify-center items-center gap-8 third"
            onSubmit={onClick}
          >
            <textarea
              name="message"
              className="border-1 border-violet-500 rounded-sm resize-none h-50 md:h-75 w-[100%] outline-0 p-5"
            />
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
            Questions Submitted
          </h1>
          <h2 className="mb-4 md:mb-8 md:text-2xl font-semibold second leading-5 md:leading-6">
            Thank you for taking the time to submit your questions for Dr. Sims
            to answer! We hope to see you at the event.
          </h2>
        </div>
      )}
    </div>
  );
}

export default SubmitQuestions;
