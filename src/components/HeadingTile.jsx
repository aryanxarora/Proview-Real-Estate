import { useState, useEffect } from "react";
import IconInfo from "./IconInfo";

function HeadingTile() {
  const slideshow = [
    "url(https://www.macleweb.com/immobilier/large_photo/286172971.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172972.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172973.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172974.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172975.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172976.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172977.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172978.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/286172979.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729710.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729711.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729712.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729713.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729714.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729715.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729716.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729717.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729718.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729719.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729720.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729721.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729722.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729723.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729724.jpg)",
    "url(https://www.macleweb.com/immobilier/large_photo/2861729725.jpg)",
  ];
  const [bg, setBg] = useState(slideshow[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((index) => {
        const current = slideshow.indexOf(index);
        console.log(current, slideshow.length);
        if (current == slideshow.length - 1) {
          return slideshow[0];
        } else {
          return slideshow[current + 1];
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:flex lg:mx-5">
      <div
        className="h-[425px] md:h-auto bg-cover bg-center bg-no-repeat bg-slate-200 p-5 m-5 rounded-2xl md:basis-1/2 xl:mr-10 duration-700"
        style={{
          backgroundImage: bg,
        }}
      ></div>
      <div className="m-5 md:basis-1/2">
        <h1>$895,000</h1>
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
