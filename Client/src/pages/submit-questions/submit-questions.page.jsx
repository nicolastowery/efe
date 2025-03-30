import { useRef } from "react";
import emailjs from "@emailjs/browser";
function SubmitQuestions() {
  const form = useRef();

  const onClick = (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_SERVICE_ID);
    console.log(import.meta.env.VITE_TEMPLATE_ID);
    console.log(import.meta.env.VITE_PUBLIC_KEY);
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    );
  };
  return (
    <>
      <div className="p-10 md:p-20  flex justify-center">
        <div className="max-w-4xl">
          <h1 className="text-center text-violet-500 tracking-tight text-5xl md:text-8xl leading-11 md:leading-19 font-bold uppercase first">
            Submit Questions
          </h1>
          <h2 className="my-8 md:text-2xl font-semibold second">
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
              className="border-1 rounded-md resize-none h-75 w-[100%] outline-0 p-5"
            />
            <button
              type="submit"
              className="uppercase tracking-wide text-4xl submit p-4 rounded-[999px] w-60 cursor-pointer bg-violet-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubmitQuestions;
