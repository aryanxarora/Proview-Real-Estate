import { useState, useEffect } from "react";
import IconInfo from "./IconInfo";

function Listing() {
  const slideshow = [
    "url(https://www.macleweb.com/immobilier/large_photo/286172971.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172972.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172976.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172979.jpg)",
  ];
  const [bg, setBg] = useState(slideshow[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((prevValue) => {
        const currentIndex = slideshow.indexOf(prevValue);
        const nextIndex = (currentIndex + 1) % slideshow.length;
        return slideshow[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:flex xl:mx-20">
      <div
        className="h-96 md:h-auto bg-cover bg-center bg-no-repeat bg-slate-200 p-5 m-5 rounded-2xl flex flex-col items-bottom justify-end pb-10 md:basis-1/2 xl:mr-10 duration-700"
        style={{
          backgroundImage: bg,
        }}
      ></div>
      <div className="m-5 md:basis-1/2">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          288 Rue Richmond
        </h1>
        <h2 className="text-sm md:text-base mb-5">Montréal (Le Sud-Ouest)</h2>
        <p className="text-md md:text-xl">
          Welcome to Quartier Général - Ultra chic luxury building located in
          the heart of Griffintown. This brand new corner unit offers a bright
          and spacious open concept living room and dining room with a modern
          kitchen. The condo features 2 bedrooms and 2 bathrooms with a balcony
          facing north/west with breathtaking city views. It also includes a
          garage and storage locker. A must see!
        </p>
        <div className="mt-10">
          <IconInfo />
        </div>
        <iframe
          className="w-full rounded-xl mt-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.0959022205484!2d-73.5658045!3d45.488013499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b9f89b4f90b%3A0x412bc6fd6ed0df9b!2s288%20Ave%20Richmond%2C%20Montreal%2C%20QC%20H3J%200C4!5e0!3m2!1sen!2sca!4v1685512995465!5m2!1sen!2sca&iwloc=nocursor"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Listing;
