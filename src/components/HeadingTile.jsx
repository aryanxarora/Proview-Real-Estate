import { useState, useEffect } from "react";
import IconInfo from "./IconInfo";

function HeadingTile() {
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:flex lg:mx-5">
      <div
        className="h-96 md:h-auto bg-cover bg-center bg-no-repeat bg-slate-200 p-5 m-5 rounded-2xl md:basis-1/2 xl:mr-10 duration-700"
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
      </div>
    </div>
  );
}

export default HeadingTile;
