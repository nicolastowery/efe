import Section from "../../components/section.comp";
import SpeakerImg from "../../assets/speaker.png";

function Speaker() {
  return (
    <Section title="Meet Dr. Sims">
      <div className="flex flex-col items-center gap-5 pt-5">
        <img
          src={SpeakerImg}
          alt="Dr. Sims"
          className="h-50 w-50 md:h-75 md:w-75 object-cover circle rounded-full grayscale opacity-75"
        />
        <p>
          Dr. Dustin Sims is the Assistant Professor of Apologetics and Theology
          at Clear Creek Baptist Bible College. He has earned a Bachelor of Arts
          in Ministry from Clear Creek Baptist Bible College, a Master of
          Theological Studies from Southwestern Baptist Theological Seminary, a
          Master of Arts in History from Liberty University, a Master of
          Theology in Christian Apologetics from Liberty Baptist Theological
          Seminary, and a Doctor of Educational Ministry in Applied Theology
          from The Southern Baptist Theological Seminary.
        </p>
        <p>
          Bringing a wealth of knowledge and a deep passion for apologetics, Dr.
          Sims will be uniquely qualified to lead Evidence for Easter. Drawing
          on his theological expertise and deep commitment to the truth of the
          gospel, he will provide a powerful case for the resurrection that will
          encourage the believer and challenge the skeptic.
        </p>
        <p>
          Outside of his academic and teaching pursuits, Dr. Sims is a devoted
          husband and father, continuing to glorify God in all he does. His
          passion for faith, family, and ministry shines through his work as he
          seeks to teach others the truth of the gospel.
        </p>
      </div>
    </Section>
  );
}

export default Speaker;
