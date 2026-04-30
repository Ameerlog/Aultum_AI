import React from "react";
import coBrotherLogo from "../assets/Cobrother_Green.png";

const CoBrother = () => {
  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex items-center gap-4">
          <img src={coBrotherLogo} alt="CoBrother" className="h-16 w-auto" />
          {/* <h1 className="text-4xl font-semibold text-zinc-950 md:text-5xl">CoBrother</h1> */}
        </div>
        <div className="mt-2 h-1 w-16 bg-blue-400" />
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-700 md:text-xl">
          The Digital Bridge: CoBrother empowers grassroots South Asian entrepreneurs with domains, branding, automation, and practical business acceleration.
        </p>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-700 md:text-xl">
          Doorstep services with industrial discipline. We bridge the gap between physical hard work and the digital future.
        </p>
      </section>
    </div>
  );
};

export default CoBrother;
