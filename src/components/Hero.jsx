// HeroWithCards.jsx
import React, { useState } from "react";
import CardFeatures from "./CardFeatures";
import PopupForm from "./PopupForm";
import { ArrowRight, Calendar } from "lucide-react";

const HeroWithCards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 h-[360px] w-full bg-gradient-to-br from-pink-900 via-purple-300 to-blue-600 opacity-80 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 text-center mt-20">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-[28px] md:text-[36px] lg:text-[56px]">
          Accelerate Your Business Growth
          <br />
          with Aultum Doorstep 
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 sm:text-[14px] md:text-[18px] lg:text-[20px]">
          Intelligent solutions to accelerate your business growth on site.
        </p>

     <button
  onClick={() => setIsPopupOpen(true)}
  className="
    group
    mt-8
    inline-flex items-center gap-3
    rounded-full
    border border-zinc-800
    bg-zinc-900
    px-8 py-4
    text-base font-semibold text-white
    shadow-lg
    transition-all duration-300
    hover:bg-zinc-800
    hover:border-zinc-600
    hover:-translate-y-1
    hover:shadow-2xl
    active:translate-y-0
  "
>
  <Calendar className="w-5 h-5" />
  Book Your Visit
  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
</button>



      </div>

      <CardFeatures />

 
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default HeroWithCards;