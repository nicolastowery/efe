import Easter from "../assets/easter-min.png";
import EvidenceFor from "../assets/evidence-for-1.png";
function Home() {
  return (
    <div className="home flex items-center justify-center">
      <div className="p-8">
        <div className="w-[100%]">
          <img src={EvidenceFor} alt="evidence for" className="evidence-for" />
        </div>
        <img
          src={Easter}
          alt="easter"
          className="easter md:mt-[-34px] mt-[-20px]"
        />
      </div>
    </div>
  );
}

export default Home;
