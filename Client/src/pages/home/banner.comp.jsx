import EvidenceFor from "../../assets/evidence-for-1.png";
import Easter from "../../assets/easter-min.png";

function Banner() {
  return (
    <section className="home-banner flex flex-col items-center justify-between md:justify-center py-20 z-1 h-[100dvh]">
      <div className="p-8 mb-64 sm:mb-0">
        <div className="w-[100%]">
          <img src={EvidenceFor} alt="evidence for" className="evidence-for" />
        </div>
        <img
          src={Easter}
          alt="easter"
          className="easter md:mt-[-34px] mt-[-20px]"
        />
      </div>
    </section>
  );
}

export default Banner;
