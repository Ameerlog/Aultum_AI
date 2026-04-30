import React from "react";
import grayMaterialLogo from "../assets/gray-material.png";

const GrayMaterial = () => {
  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex items-center gap-4">
          <img src={grayMaterialLogo} alt="Gray Material" className="h-16 w-auto" />
          {/* <h1 className="text-4xl font-semibold text-zinc-950 md:text-5xl">Gray Material</h1> */}
        </div>
        <div className="mt-2 h-1 w-16 bg-blue-400" />
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-700 md:text-xl">
          The Physical Foundation: Gray Material delivers standardized quality in industrial aggregates, backed by Vertical Mineral Intelligence and initiatives like Lab-on-Wheels.
        </p>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-700 md:text-xl">
          The physical foundation at industrial scale. We bring unprecedented Mineral Intelligence to the traditional world of construction materials.
        </p>
      </section>
    </div>
  );
};

export default GrayMaterial;
