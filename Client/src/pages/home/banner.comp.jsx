import EvidenceFor from "../../assets/evidence-for-1.png";
import Easter from "../../assets/easter-min.png";

function Banner() {
  return (
    <section className="home-banner flex flex-col items-center md:justify-center py-20 z-1 h-[100dvh]">
      <div className="p-8 md:mb-64">
        <div className="w-[100%]">
          <img src={EvidenceFor} alt="evidence for" className="evidence-for" />
        </div>
        <img
          src={Easter}
          alt="easter"
          className="easter md:mt-[-34px] mt-[-20px]"
        />
      </div>
      <span className="text-slate-50/85 rounded-sm uppercase font-semibold tracking-wide md:tracking-wider text-[0.7rem] md:text-[0.9rem] bg-violet-600/50 p-2 md:p-3 leading-3 presented-by">
        a presentation of the baptist collegiate ministry
      </span>
    </section>
  );
}

export default Banner;
