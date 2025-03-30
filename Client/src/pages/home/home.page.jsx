import Banner from "./banner.comp";
import TimeAndLocation from "./time-and-location.comp";
import Speaker from "./speaker.comp";
import Mission from "./mission.comp";
import Footer from "../../layout/footer.comp";

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Banner />
      <div className="py-8 px-10 md:px-20 flex justify-center">
        <div className="max-w-4xl mb-36">
          <h1 className="text-center text-violet-500 tracking-tight text-5xl md:text-8xl leading-11 md:leading-19 font-bold uppercase">
            Event Details
          </h1>
          <TimeAndLocation />
          <Speaker />
          <Mission />
        </div>
      </div>
    </div>
  );
}

export default Home;
