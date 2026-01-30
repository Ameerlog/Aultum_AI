// import React, { useState } from "react";
// import { ChevronDown, LayoutGrid, List } from "lucide-react";

// const DashboardDetails = () => {
//   const [viewMode, setViewMode] = useState("grid");
//   const emptyCards = [1, 2, 3, 4];

//   return (
//     <section className="relative bg-blue-100/10 z-20 mt-3">
//       <div className="mx-auto max-w-7xl px-4 ">
      
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold text-zinc-900">Dashboard</h2>

//           <div className="flex items-center gap-1">
//             <button
//               onClick={() => setViewMode("grid")}
//               className={`p-2 rounded-md transition-all ${
//                 viewMode === "grid"
//                   ? "bg-gray-300 text-black"
//                   : "text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100"
//               }`}
//             >
//               <LayoutGrid className="h-5 w-5" />
//             </button>
//             <button
//               onClick={() => setViewMode("list")}
//               className={`p-2 rounded-md transition-all ${
//                 viewMode === "list"
//                   ? "bg-zinc-900 text-white"
//                   : "text-zinc-400 bg-white hover:text-zinc-600 hover:bg-zinc-100"
//               }`}
//             >
//               <ChevronDown className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

  
//         <div
//           className={
//             viewMode === "grid"
//               ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//               : "flex flex-col gap-4"
//           }
//         >
//           {emptyCards.map((item) => (
//             <div
//               key={item}
//               className={`rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md ${
//                 viewMode === "grid"
//                   ? "px-8 py-8 min-h-[200px] flex flex-col justify-between"
//                   : "px-8 py-6 flex items-center gap-6"
//               }`}
//             >
//               {viewMode === "grid" ? (
//                 <>
//                   <div>
//                     <div className="h-4 w-24 rounded bg-zinc-100 mb-4" />
//                     <div className="h-10 w-32 rounded bg-zinc-100" />
//                   </div>
//                   <div className="h-3 w-20 rounded bg-zinc-100" />
//                 </>
//               ) : (
//                 <>
//                   <div className="h-14 w-14 rounded-xl bg-zinc-100" />
//                   <div className="flex-1">
//                     <div className="h-4 w-24 rounded bg-zinc-100 mb-3" />
//                     <div className="h-8 w-32 rounded bg-zinc-100" />
//                   </div>
//                   <div className="h-4 w-16 rounded bg-zinc-100" />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DashboardDetails;

import React, { useState } from "react";
import { ChevronDown, LayoutGrid } from "lucide-react";

import technetwork from "../assets/technetwork.svg";
import sales from "../assets/salesPerformance.svg";
import graph from "../assets/Untitled.svg";
import graph2 from "../assets/activepartners.svg";

const dashboardCards = [
  { id: 1, icon: technetwork },
  { id: 2, icon: graph },
  { id: 3, icon: sales },
  { id: 4, icon: graph2 },
];

const DashboardDetails = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <section className="relative z-20 mt-3">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-zinc-900">Dashboard</h2>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid"
                  ? "bg-gray-300"
                  : "text-zinc-400 hover:bg-zinc-100"
              }`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${
                viewMode === "list"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:bg-zinc-100"
              }`}
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className={
            viewMode === "grid"
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "flex flex-col gap-4"
          }
        >
          {dashboardCards.map((item) => (
            <div
              key={item.id}
              className={`group overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200 shadow-sm hover:shadow-md transition ${
                viewMode === "grid" ? "h-40" : "w-40"
              }`}
            >
        <div className="h-full w-full p-2 flex items-center justify-center">
          <img
            src={item.icon}
            alt="dashboard"
            className="h-full w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.1]"
          />
        </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardDetails;
