import { CiLocationOn } from "react-icons/ci";
import Section from "../../components/section.comp";
import { useEffect, useState } from "react";

function TimeAndLocation() {
  const [isIos, setIsIos] = useState(false);
  const mapsLink = isIos
    ? "http://maps.apple.com/?address=225,Pump+Springs+Rd,Harrotage,Tennessee"
    : "https://www.google.com/maps/place/Pump+Springs+Baptist+Church/@36.5621997,-83.6407143,3a,75y,302.58h,91.2t/data=!3m7!1e1!3m5!1s_ucXtsjuR_-gY1t-lNcUTA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-1.1986455966082445%26panoid%3D_ucXtsjuR_-gY1t-lNcUTA%26yaw%3D302.5769250188157!7i13312!8i6656!4m16!1m9!3m8!1s0x885c83ae9bd702f3:0x5aa5a4398e2c8c59!2s225+Pump+Springs+Rd,+Harrogate,+TN+37752!3b1!8m2!3d36.5624024!4d-83.6406305!10e5!16s%2Fg%2F11c29ccn0g!3m5!1s0x885c83aea31f13b5:0xa301276a3d054b9d!8m2!3d36.5626468!4d-83.6410361!16s%2Fg%2F1tg5149w?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D";

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
            <span>225 Pump Springs Rd</span>
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
            <span>Pump Springs Baptist Church</span>
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
