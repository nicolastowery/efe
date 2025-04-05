import { CiLocationOn } from "react-icons/ci";
import Section from "../../components/section.comp";
import { useEffect, useState } from "react";

function TimeAndLocation() {
  const [isIos, setIsIos] = useState(false);
  const mapsLink = isIos
    ? "http://maps.apple.com/?address=325,Hamilton+Way+Dr,Cumberland+Gap,Tennessee"
    : "https://www.google.com/maps/place/Hamilton+Math+%26+Science+Building,+325+Hamilton+Way,+Harrogate,+TN+37752/@36.5773553,-83.6697007,17z/data=!3m1!4b1!4m6!3m5!1s0x885c837a0c69bddd:0xbc04d123faa07d88!8m2!3d36.577351!4d-83.6671258!16s%2Fg%2F1q5bpq870?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D";

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iosDevices = /iphone|ipad|ipod/;
    setIsIos(iosDevices.test(userAgent));
  }, []);
  return (
    <Section title="Time And Location">
      <div className="flex flex-wrap justify-center md:justify-between gap-x-5 gap-y-10">
        <ul>
          <li className="flex justify-between gap-3">
            <span className="font-bold uppercase">Date: </span>
            <span>April 17, 2025</span>
          </li>
          <li className="flex justify-between gap-3 mb-3">
            <span className="font-bold uppercase">Time: </span>
            <span>8:00pm - 9:30pm ET</span>
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
            <span>MANS 101</span>
          </li>
        </ul>
        <a
          href={mapsLink}
          target="_blank"
          className="flex flex-col items-center"
        >
          <CiLocationOn className="text-violet-500 text-7xl md:text-8xl" />
          <span className="text-violet-500  text-3xl md:text-4xl underline font-bold uppercase tracking-wide italic">
            Open in Maps
          </span>
        </a>
      </div>
    </Section>
  );
}

export default TimeAndLocation;
