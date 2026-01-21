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
          <h3 className="text-lg font-[Inter] font-[14px] text-zinc-900">{title}</h3>
          <p className="text-sm text-zinc-500 font-[13px]">{description}</p>
        </div>

    
        <button className="rounded-2xl px-6 py-3 text-sm font-medium text-zinc-900  ring-zinc-700 transition-all hover:bg-zinc-100 border-gray-700">
          View Details
        </button>

        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-600">Add to Portfolio</span>
          <button
            onClick={() => onToggle(id)}
            className={`relative h-6 w-11 rounded-full transition-all ${
              isActive ? "bg-zinc-900" : "bg-zinc-300"
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
    );
  }

  
  return (
    <div className="rounded-2xl bg-white px-8 py-9 min-h-[200px] shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md flex flex-col justify-between">
   
      <div>
  
        <div
          className={`h-12 w-12 flex items-center justify-center rounded-xl ${theme.bg} mb-4`}
        >
          <Box className={`h-6 w-6 ${theme.iconColor}`} />
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
        <p className="text-sm text-zinc-500 line-clamp-2">{description}</p>
      </div>

     
      <div className="flex  justify-between mt-6">
     
        <button className="rounded-lg   bg-gray-100 px-1.5 py-2  text-sm font-medium text-zinc-900 ring-1 ring-zinc-400 transition-all hover:bg-zinc-50">
          View Details
        </button>

        <div className="flex items-center gap-0.5">
          <span className="text-[12px] text-black
           font-bold">Add to Portfolio</span>
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