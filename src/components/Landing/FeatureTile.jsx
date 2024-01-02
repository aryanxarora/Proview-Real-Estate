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
        {data.features && (
          <div>
            {data.features.map((item) => (
              <div>
                <div className="flex py-3 gap-5 items-center">
                  <div className="bg-gray-300 p-3 rounded">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/665/665939.png"
                      alt="print"
                      className="w-5"
                    />
                  </div>
                  <p className="font-semibold text-gray-700">{item}</p>
                </div>
                {/* <hr /> */}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="lg:basis-1/2 lg:p-10">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
}

export default FeatureTile;
