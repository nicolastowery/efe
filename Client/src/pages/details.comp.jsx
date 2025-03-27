import Speaker from "../assets/speaker.png";
import { CiLocationOn } from "react-icons/ci";
function Details() {
  return (
    <div className="p-20 flex justify-center">
      <div className="max-w-4xl">
        <h1 className="text-center text-violet-500 tracking-tight text-5xl md:text-8xl leading-11 md:leading-19 font-bold uppercase first">
          The Evidence for Easter
        </h1>
        <section className="mt-20 second">
          <h2 className="text-center text-orange-300 text-3xl uppercase font-bold tracking-wider">
            Our Mission
          </h2>
          <div className="flex flex-col gap-5">
            <div>
              This page can be in any order you like! Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam ullamcorper nunc eget
              eros{" "}
              <span className="font-bold text-violet-500">
                maximus faucibus
              </span>
              . Integer mi urna, viverra vel feugiat rhoncus, lobortis ac erat.
              In hac habitasse platea dictumst. Mauris tempor mauris et purus
              vehicula dapibus. Sed pulvinar a lacus et porttitor. Proin nisi
              nulla, euismod quis ligula et, viverra euismod enim. Nunc diam
              quam, tristique in neque sed, eleifend gravida enim. Aenean
              molestie feugiat ligula. Etiam imperdiet, nisl vel vehicula
              placerat, odio lacus auctor purus, vel vulputate leo orci ac
              felis. Cras sollicitudin&nbsp;
              <span className="font-bold text-violet-500">
                varius massa ac facilisis
              </span>
              . Quisque vitae porta dui. Morbi tempus diam in mauris tincidunt
              bibendum. Proin non est non est suscipit elementum sed non tellus.
              Mauris molestie gravida tincidunt.{" "}
            </div>
            <div>
              Vestibulum eget erat vel est tempus auctor ac eu ipsum. Vivamus
              sit amet tempus turpis.{" "}
              <span className="font-bold text-violet-500">
                Vivamus rhoncus placerat ex ac viverra.&nbsp;
              </span>
              Duis est elit, faucibus mollis ipsum vel, posuere mattis dolor.
              Suspendisse euismod ante eu elit semper volutpat. Integer laoreet
              nisi at blandit euismod. Nullam feugiat dapibus ipsum, ut mattis
              arcu viverra faucibus.{" "}
            </div>
            <div>
              Etiam imperdiet sed metus sit amet posuere. Suspendisse ac tellus
              nisl. Aenean ut lectus nec dui feugiat scelerisque sed eget
              tortor. Pellentesque nec purus purus. Aenean condimentum lobortis
              malesuada. Sed vel massa mollis, ornare dui condimentum, convallis
              est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vel porta ex.{" "}
              <span className="font-bold text-violet-500">
                Aliquam libero ex
              </span>
              , porta vel commodo a, luctus eu nunc. Suspendisse non lobortis
              tortor, nec volutpat ex. Sed eget malesuada lorem.
            </div>
          </div>
        </section>
        <section className="mt-20 third">
          <h2 className="text-center text-orange-300 text-3xl uppercase font-bold tracking-wider">
            Meet Dr. Sims
          </h2>
          <div className="flex flex-col items-center gap-5 pt-5">
            <img
              src={Speaker}
              alt="Dr. Sims"
              className="h-50 w-50 md:h-75 md:w-75 object-cover circle rounded-full grayscale opacity-75"
            />
            <div>
              Nullam tellus felis, fermentum at lorem eget, tristique pretium
              velit. Nulla facilisi. Etiam eu efficitur felis. Nullam vehicula
              arcu eget laoreet luctus. Aliquam maximus tincidunt nisi
              sollicitudin consequat. Duis euismod erat nibh, a egestas eros
              fermentum non. Sed turpis nulla, imperdiet sed sem ut, hendrerit
              ultrices velit. Aenean ultricies augue at ipsum pulvinar pulvinar
              vitae et tortor. Curabitur at viverra arcu, at varius lectus.{" "}
            </div>
            <div>
              Quisque ac ultrices justo. Pellentesque in massa euismod, aliquam
              ipsum ut, congue felis. Ut rutrum dignissim orci, sit amet
              tincidunt metus euismod quis. Nunc dolor nibh, ornare at lorem
              sed, cursus euismod lectus. Duis a ipsum ullamcorper, interdum
              metus et, condimentum enim. Praesent tincidunt arcu vitae leo
              sagittis iaculis. Vivamus ac ligula urna. Suspendisse nec dolor
              commodo, consectetur dolor pulvinar, convallis elit. Mauris
              dignissim a risus quis ultrices.
            </div>
          </div>
        </section>
        <section className="mt-20 fourth">
          <h2 className="text-center text-orange-300 text-3xl uppercase font-bold tracking-wider">
            Time & Location
          </h2>
          <div className="flex flex-wrap justify-between gap-x-5 gap-y-10 pt-5">
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
        </section>
      </div>
    </div>
  );
}

export default Details;
