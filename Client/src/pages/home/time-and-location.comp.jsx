import { CiLocationOn } from "react-icons/ci";
import Section from "../../components/section.comp";

function TimeAndLocation() {
  return (
    <Section title="Time And Location">
      <div className="flex flex-wrap justify-center md:justify-between gap-x-5 gap-y-10 pt-5">
        <ul>
          <li className="flex justify-between gap-3">
            <span className="font-bold uppercase">Date: </span>
            <span>April 4, 2025</span>
          </li>
          <li className="flex justify-between gap-3 mb-3">
            <span className="font-bold uppercase">Time: </span>
            <span>5:00pm - 6:00pm ET</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="font-bold uppercase">Street: </span>
            <span>325 Hamilton Way</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="font-bold uppercase">City: </span>
            <span>Harrogate</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="font-bold uppercase">State: </span>
            <span>Tennessee</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="font-bold uppercase">Building: </span>
            <span>Math and Science Building</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="font-bold uppercase">Room #: </span>
            <span>MANS 100</span>
          </li>
        </ul>
        <a
          href="https://www.google.com/maps/place/Hamilton+Math+%26+Science+Building,+325+Hamilton+Way,+Harrogate,+TN+37752/@36.5773553,-83.6697007,17z/data=!3m1!4b1!4m6!3m5!1s0x885c837a0c69bddd:0xbc04d123faa07d88!8m2!3d36.577351!4d-83.6671258!16s%2Fg%2F1q5bpq870?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="flex flex-col items-center"
        >
          <CiLocationOn className="text-violet-500 text-[140px]" />
          <span className="text-violet-500 text-4xl underline font-bold uppercase tracking-wide">
            Open in Maps
          </span>
        </a>
      </div>
    </Section>
  );
}

export default TimeAndLocation;
