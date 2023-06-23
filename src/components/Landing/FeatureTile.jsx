import React from "react";

function FeatureTile() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:gap-20 2xl:gap-32 lg:items-center my-20 lg:my-40">
      <div className="lg:basis-1/2">
        <h1 className="text-3xl font-black leading-none my-5 font-sans lg:text-5xl">
          The full power of your favorite editor
        </h1>
        <p className="my-5 text-slate-500 font-sans text-[1rem] leading-relaxed lg:text-xl">
          Use Visual Studio Code, Jupyter, or JetBrains with the editor,
          terminal, debugger, version control, settings sync, and all of your
          extensions. Work from any device in a browser, or hand off to your
          desktop. It’s that simple.
        </p>
      </div>
      <div className="lg:basis-1/2">
        <img
          src="https://github.githubassets.com/images/modules/site/codespaces/illo-hero-ide.png?width=1248&format=webpll"
          alt=""
        />
      </div>
    </div>
  );
}

export default FeatureTile;
