import React from "react";
import { Box } from "lucide-react";

const ProductCard = ({ product, onToggle, viewMode }) => {
  const { id, title, description, isActive, theme } = product;

  if (viewMode === "list") {
    return (
      <div className="rounded-2xl bg-white px-8 py-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md flex items-center gap-6">
   
        <div
          className={`h-14 w-14 flex items-center justify-center rounded-xl ${theme.bg}`}
        >
          <Box className={`h-6 w-6 ${theme.iconColor}`} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-medium text-zinc-900">{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>

        {/* Actions - aligned */}
        <div className="flex items-center gap-6">
          <button className="rounded-lg px-6 py-2.5 text-sm font-medium text-zinc-900 ring-1 ring-zinc-300 transition-all hover:bg-zinc-100">
            View Details
          </button>

          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-600">Add to Portfolio</span>
            <button
              onClick={() => onToggle(id)}
              className={`relative h-6 w-11 rounded-full transition-all ${
                isActive ? "bg-blue-500" : "bg-zinc-300"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all ${
                  isActive ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="rounded-2xl bg-white px-6 py-6 min-h-[220px] shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md flex flex-col justify-between">
  
      <div>
     
        <div
          className={`h-12 w-12 flex items-center justify-center rounded-xl ${theme.bg} mb-4`}
        >
          <Box className={`h-6 w-6 ${theme.iconColor}`} />
        </div>

        <h3 className="text-base font-semibold text-zinc-900 mb-2">{title}</h3>
        <p className="text-sm text-zinc-500 line-clamp-2">{description}</p>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-100">
     
        <button className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-300 transition-all hover:bg-zinc-200">
          View Details
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-600 font-medium">Portfolio</span>
          <button
            onClick={() => onToggle(id)}
            className={`relative h-6 w-11 rounded-full transition-all ${
              isActive ? "bg-blue-500" : "bg-zinc-300"
            }`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all ${
                isActive ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;