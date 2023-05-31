function Listing() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-slate-200 p-5 m-5 rounded-2xl h-96 flex flex-col items-bottom justify-end pb-10"
        style={{
          backgroundImage:
            "url(https://www.macleweb.com/immobilier/large_photo/285025021.jpg)",
        }}
      ></div>
      <div className="mx-5">
        <h1 className="text-2xl font-bold">242 Rue Young</h1>
        <h2 className="text-sm mb-5">Montréal (Le Sud-Ouest)</h2>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          culpa perspiciatis impedit quibusdam omnis et quisquam illum explicabo
          eaque cum eos maiores pariatur saepe ullam, quae ipsa hic quo!
          Tempore!
        </p>
      </div>
    </div>
  );
}

export default Listing;
