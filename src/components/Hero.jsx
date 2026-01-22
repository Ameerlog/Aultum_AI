import React from "react";
import CardFeatures from "./CardFeatures";

const HeroWithCards = () => {
  return (
    <section className="relative w-full ">
    
      <div className="absolute top-0 left-0 h-[360px] w-full bg-linear-to-br from-pink-900 via-purple-300 to-blue-600 opacity-80 blur-[100px]" />

     
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 text-center mt-20">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-[28px] md:text-[36px] lg:text-[56px]">
          Accelerate Your SaaS Growth
          <br />
          with Doorstep Delivery
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 sm:text-[14px] md:text-[18px] lg:text-[20px]">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, adipisci!
        </p>
      </div>
      <CardFeatures />
    </section>
  );
};

export default HeroWithCards;