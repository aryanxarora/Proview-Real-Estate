import React from "react";

function FeatureTile({ data }) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:gap-5 2xl:gap-32 lg:items-center my-20 z-0 ">
      <div className="lg:basis-1/2 ">
        <h1 className="text-4xl font-black leading-none my-5 font-sans lg:text-5xl">
          {data.title}
        </h1>
        <p className="my-5 text-slate-500 font-sans text-[1rem] leading-relaxed lg:text-xl">
          {data.content}
        </p>
      </div>
      <div className="lg:basis-1/2">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
}

export default FeatureTile;
