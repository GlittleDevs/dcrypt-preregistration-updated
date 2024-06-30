import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <div className="w-full overflow-hidden bottom-4 bg-black bg-opacity-50 text-white py-2 mb-8">
            <div className="whitespace-nowrap animate-marquee h5">
              You need to access the site on a laptop or PC to access DCRYPT as
              it is not compatible with mobiles or tablets.
            </div>
          </div>
          <h1 className="h1 mb-6">
            Hack your Success&nbsp; with {` `}
            <span className="inline-block relative">
              DCRYPT{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Join us in revolutionizing how we learn to code and get the
            spotlight we deserve.
          </p>
          <Button href="#pricing" white>
            Get Started Now
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] rounded-b-[0.9rem] overflow-hidden">
                <iframe
                  id="demo"
                  src="https://drive.google.com/file/d/1uY_3f5hbzdMvDPD8OWX8ElHv-3vm1LMa/preview"
                  className="w-full h-full"
                  style={{ height: "490px", transition: "all 0.3s" }}
                  title="Problem Solution Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <BottomLine />
      </div>
    </Section>
  );
};

// Tailwind CSS for marquee animation
const styles = `
  @layer utilities {
    .animate-marquee {
      animation: marquee 15s linear infinite;
    }

    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;

// Inject styles into the page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Hero;
