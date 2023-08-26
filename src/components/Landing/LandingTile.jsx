function LandingTile({ data }) {
  return (
    <div>
      <div
        className="rounded-xl p-3 bg-top bg-cover relative"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        <div className="m-3 relative z-10">
          <h1 className="font-sans text-3xl font-semibold leading-tight text-white">
            {data.title}
          </h1>
          <p className="text-white mt-3">{data.content}</p>
        </div>
        <div className="h-40"></div>
        <div className="bg-white p-5 rounded-lg relative z-10">
          <h1 className="font-sans font-semibold text-2xl leading-none">
            {data.subtitle}
          </h1>
          <p className="text-sm mt-10">
            {/* <span className="text-slate-400">in</span>{" "} */}
            <a href="#" className="font-medium underline">
              Learn More
            </a>
          </p>
        </div>
        <div className="bg-black absolute inset-0 w-full rounded-xl h-full opacity-50"></div>
      </div>
    </div>
  );
}

export default LandingTile;
