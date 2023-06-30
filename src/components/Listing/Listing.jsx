import Slideshow from "../Templates/Slideshow";

export default function Listing() {
  return (
    <div className="p-5 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="basis-full lg:basis-1/2">
          <Slideshow />
        </div>
        <div className="basis-full lg:basis-1/2">
          <h2>$849,000</h2>
          <h1 className="mt-1 mb-3 text-3xl font-sans font-bold xl:text-4xl 2xl:text-5xl">
            288 Rue Richmond
          </h1>
          <span className="font-head text-sm bg-black text-white font-semibold py-2 px-5 rounded-lg">
            Montréal (Le Sud-Ouest)
          </span>
          <p className="font-sans my-10 xl:text-lg 2xl:text-xl">
            Welcome to Quartier Général - Ultra chic luxury building located in
            the heart of Griffintown. This brand new corner unit offers a bright
            and spacious open concept living room and dining room with a modern
            kitchen. The condo features 2 bedrooms and 2 bathrooms with a
            balcony facing north/west with breathtaking city views. It also
            includes a garage and storage locker. A must see!
          </p>
          <div className="flex gap-10 text-gray-900">
            <div className="flex flex-col items-center gap-3">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/505050/bed.png"
                alt="bed"
              />
              <p>2 Bed(s)</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/505050/shower-and-tub.png"
                alt="shower-and-tub"
              />
              <p>2 Bath(s)</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/505050/map.png"
                alt="map"
              />
              <p>828.28 sq.ft.</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.0376635347975!2d-73.5681529!3d45.4891863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6467004f21%3A0x9e4e9447f27b194f!2s488%20Rue%20Richmond%2C%20Montr%C3%A9al%2C%20QC%20H3J%201V3!5e0!3m2!1sen!2sca!4v1688095152694!5m2!1sen!2sca"
          className="w-full h-96 mt-10 rounded-xl"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  );
}
