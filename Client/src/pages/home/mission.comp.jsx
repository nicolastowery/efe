import Section from "../../components/section.comp";

function Mission() {
  return (
    <Section title="Our Mission">
      <div className="flex flex-col gap-5">
        <p>
          In 1 Corinthians 15:13-19, Paul boldly declares that{" "}
          <span className="font-bold text-violet-500">
            if Jesus were not raised from the dead, then the foundation of
            Christianity would crumble.
          </span>{" "}
          This profound statement challenges us to examine the evidence:
          <span className="font-bold text-violet-500">
            &nbsp;Is there compelling evidence that Jesus truly rose from the
            dead?
          </span>
        </p>
        <p>
          This question inspired the creation of{" "}
          <span className="font-bold text-orange-300">Evidence for Easter</span>
          , a dedicated night to thoughtfully explore and present the case for
          the historical resurrection. This event is designed to help Christians{" "}
          <span className="font-bold text-violet-500">deepen</span> their
          understanding of their faith while equipping them with clear and
          compelling arguments. It also seeks to{" "}
          <span className="font-bold text-violet-500">
            address the questions
          </span>{" "}
          of skeptics, offering reasoned and persuasive evidence. By the end of
          the night, we hope your answer will resound with confidence:{" "}
          <span className="font-bold text-violet-500">"Yes!"</span>
        </p>
      </div>
    </Section>
  );
}

export default Mission;
