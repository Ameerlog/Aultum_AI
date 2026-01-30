import React from "react";
import { useNavigate } from "react-router-dom";
import { cards } from "../data/card";

const CardFeatures = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-20 -mt-1">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl font-semibold text-zinc-900">Quick access</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-2">
          {cards.map((item, index) => (
            <div
              key={index}
              onClick={() => item.route && navigate(item.route)}
              className="
                flex items-center gap-4 rounded-xl bg-white px-6 py-4
                shadow-sm ring-1 ring-zinc-200 cursor-pointer
                transition-all duration-200 ease-in-out
                hover:shadow-md hover:-translate-y-px
              "
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.theme.bg}`}
              >
                <item.icon className={`h-6 w-6 ${item.theme.iconColor}`} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900 font-[Inter]">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardFeatures;

