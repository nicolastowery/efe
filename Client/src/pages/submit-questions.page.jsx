function SubmitQuestions() {
  return (
    <div className="p-20 flex justify-center">
      <div className="max-w-4xl">
        <h1 className="text-center text-violet-500 tracking-tight text-5xl md:text-8xl leading-11 md:leading-19 font-bold uppercase first">
          Submit Questions
        </h1>
        <h2 className="my-8 text-2xl font-semibold second">
          Enter your questions for the upcoming Q&A session, and Dr. Sims will
          do his best to answer your questions!
        </h2>
        <form className="flex flex-col justify-center items-center gap-8 third">
          <textarea className="border-1 rounded-2xl resize-none h-75 w-[100%] outline-0 p-5" />
          <button className="uppercase tracking-wide text-4xl submit p-4 rounded-[999px] w-60 cursor-pointer bg-violet-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitQuestions;
