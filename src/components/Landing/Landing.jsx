import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import LandingTile from "./LandingTile";
import FeatureTile from "./FeatureTile";
import success from "../../models/success";

function Landing() {
  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <div className="text-4xl pt-10 lg:text-[4.5rem] text-center font-head font-bold leading-none w-3/4">
          <h1>Contemporary</h1>
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Real Estate
          </h1>
          <h1>Media & Marketing</h1>
        </div>
        <p className="text-center lg:text-xl font-head w-2/3 md:w-2/4 my-5 text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          consequuntur dolor voluptatem culpa doloribus ea excepturi consequatur
          nemo repellendus.
        </p>
        <div className="flex gap-3 md:gap-5">
          <a
            href=""
            className="text-md md:text-xl bg-black border-2 border-black text-white font-bold px-7 py-2 rounded-3xl my-2"
          >
            Get Started
          </a>{" "}
          <a
            href=""
            className="text-md md:text-xl text-center bg-white border-2 border-black text-black font-bold px-7 py-2 rounded-3xl my-2"
          >
            Learn More
          </a>
        </div>
        <img
          className="mt-10 md:mt-0"
          src="https://raw.githubusercontent.com/aryanxarora/proview/main/src/images/proviewlanding.png"
          alt=""
        />
      </motion.div>
      <div className="my-10">
        <p className="text-center font-head font-semibold text-xl">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap md:flex-nowrap md:gap-10 justify-center opacity-50">
          <img
            className="h-20 md:h-36"
            src="https://raw.githubusercontent.com/aryanxarora/proview/landing-page/src/images/partners/1.png"
            alt=""
          />
          <img
            className="h-20 md:h-36"
            src="https://raw.githubusercontent.com/aryanxarora/proview/landing-page/src/images/partners/2.png"
            alt=""
          />
          <img
            className="h-20 md:h-36"
            src="https://raw.githubusercontent.com/aryanxarora/proview/landing-page/src/images/partners/4.png"
            alt=""
          />
        </div>
      </div>

      {/* Features Tiles */}
      <div className="mx-5 my-20 lg:mx-20 xl:mx-44 2xl:mx-64">
        <Fade>
          <FeatureTile />
          <FeatureTile />
          <FeatureTile />
        </Fade>
      </div>
      {/* Success Generation Tiles */}
      <div>
        <h1 className="text-3xl font-black text-center my-5 font-sans lg:text-5xl">
          Success Generation{" "}
        </h1>
        <p className="mx-5 mb-10 text-slate-500 font-sans text-[1rem] leading-relaxed lg:text-xl text-center lg:mx-20 xl:mx-64 2xl:mx-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          accusamus voluptatum consequatur vero quod dolorum aliquam maiores
          adipisicing elit.
        </p>
        <div className="m-5 md:m-10 flex flex-col md:flex-row gap-5 lg:mx-20 xl:mx-32 2xl:mx-64">
          <Fade>
            {success.map((item) => (
              <LandingTile data={item} />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Landing;
