import React, { useState } from "react";
import { MapPin, CheckCircle, Funnel, MoreHorizontal } from "lucide-react";

const locations = [
  { id: 1, name: "Autum AI HQ", city: "Bangalore", skill: "Development", availability: "Available" },
  { id: 2, name: "Autum AI North", city: "Delhi", skill: "Operations", availability: "Available" },
  { id: 3, name: "Autum AI HQ", city: "Bangalore", skill: "Development", availability: "Available" },
  { id: 4, name: "Autum AI North", city: "Delhi", skill: "Operations", availability: "Available" },
];

export default function Dashboard() {
  const [selected, setSelected] = useState([]);

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelected(
      selected.length === locations.length
        ? []
        : locations.map((l) => l.id)
    );
  };

  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-10">

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Automation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        
          <div className="bg-gray-50 rounded-xl p-4 flex gap-4 border border-gray-200">
            <img
              src="https://via.placeholder.com/100"
              alt="Card Left"
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Card Left Title
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Some description about the left card.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

          
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="font-semibold text-gray-900">
                Active Funnels
              </h3>
              <select className="text-sm border rounded-md px-2 py-1 bg-white">
                <option>Month</option>
              </select>
            </div>

        
            <div className="grid grid-cols-5 px-4 py-2 text-xs font-medium text-gray-500">
              <div className="col-span-2">Name</div>
              <div>Status</div>
              <div>Leads</div>
              <div>Conversions</div>
            </div>

            <div className="divide-y">
              {[
                { name: "Onboarding Sequence", tag: "Onboarding Sequence", leads: 202, conv: "33%" },
                { name: "Lead Nurture", tag: "Onboarding Sequence", leads: 204, conv: "12%" },
                { name: "Upsell Campaign", tag: "Upsell Campaign", leads: 37, conv: "9%" },
                { name: "Upsell Campaign", tag: "Onboarding Sequence", leads: 580, conv: "15%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 px-4 py-3 items-center text-sm hover:bg-gray-50"
                >
                  <div className="col-span-2 flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Funnel className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.tag}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-800 w-fit">
                    2x Deployment
                  </span>

                  <div className="font-medium text-gray-700">
                    {item.leads}
                    <span className="block text-xs text-gray-500">
                      Leads
                    </span>
                  </div>

          
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-gray-700">
                      {item.conv}
                      <span className="block text-xs text-gray-500">
                        Conversions
                      </span>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Network
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="border border-gray-200 rounded-xl overflow-hidden h-137.5">
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                500+ Techies
              </h3>
              <p className="text-sm text-gray-500">
                Interactive map across clusters in India
              </p>
            </div>

            <iframe
              title="India Map"
              src="https://www.google.com/maps?q=India&z=4&output=embed"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col h-137.5 gap-4">

            <div className="border border-gray-200 rounded-xl overflow-hidden h-50">
              <iframe
                title="City Map"
                src="https://www.google.com/maps?q=Bangalore&z=10&output=embed"
                className="w-full h-full"
              />
            </div>

            <div className="border border-gray-200 rounded-xl flex flex-col overflow-hidden flex-1">

              <div className="px-4 py-3 border-b bg-gray-50">
                <select className="w-full px-4 py-2 text-sm border rounded-md bg-white">
                  <option>All Locations</option>
                  <option>Bangalore</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Chennai</option>
                </select>
              </div>

              <div className="overflow-y-auto flex-1">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-gray-50 text-gray-500 z-10">
                    <tr>
                      <th className="px-4 py-2">
                        <input
                          type="checkbox"
                          checked={selected.length === locations.length}
                          onChange={toggleAll}
                        />
                      </th>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Location</th>
                      <th className="px-4 py-2 text-left">Skills</th>
                      <th className="px-4 py-2 text-left">Availability</th>
                    </tr>
                  </thead>

                  <tbody>
                    {locations.map((loc) => (
                      <tr
                        key={loc.id}
                        className={`border-t hover:bg-gray-50 ${
                          selected.includes(loc.id) ? "bg-purple-50" : ""
                        }`}
                      >
                        <td className="px-4 py-2">
                          <input
                            type="checkbox"
                            checked={selected.includes(loc.id)}
                            onChange={() => toggleRow(loc.id)}
                          />
                        </td>

                        <td className="px-4 py-2 flex gap-2 items-center">
                          <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-semibold">
                            {loc.name.charAt(0)}
                          </span>
                          {loc.name}
                        </td>

                        <td className="px-4 py-2 text-gray-600">
                          <MapPin className="inline w-4 h-4 mr-1 text-gray-400" />
                          {loc.city}
                        </td>

                        <td className="px-4 py-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-purple-50 text-purple-600">
                            {loc.skill}
                          </span>
                        </td>

                        <td className="px-4 py-2">
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-green-50 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            {loc.availability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-4 py-2 border-t text-xs text-gray-500 text-right">
                {selected.length} selected
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
