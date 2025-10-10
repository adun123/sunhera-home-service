import { useState } from "react";

export default function BeforeAfter() {
  const [activeFilter, setActiveFilter] = useState("all");

  const data = [
    // 🧺 Mesin Cuci
    { id: 1, category: "mesin-cuci", before: "/galeri/mesincuci/before-mesincuci1.jpeg", after: "/galeri/mesincuci/after-mesincuci1.jpeg" },
    { id: 2, category: "mesin-cuci", before: "/galeri/mesincuci/before-mesincuci2.jpeg", after: "/galeri/mesincuci/after-mesincuci2.jpeg" },
    { id: 3, category: "mesin-cuci", before: "/galeri/mesincuci/before-mesincuci3.jpeg", after: "/galeri/mesincuci/after-mesincuci3.jpeg" },
    { id: 4, category: "mesin-cuci", before: "/galeri/mesincuci/before-mesincuci4.jpeg", after: "/galeri/mesincuci/after-mesincuci4.jpeg" },
    { id: 5, category: "mesin-cuci", before: "/galeri/mesincuci/before-mesincuci5.jpeg", after: "/galeri/mesincuci/after-mesincuci5.jpeg" },

    // 🧊 dispenser
    { id: 6, category: "dispenser", before: "/galeri/dispenser/before-dispenser1.jpeg", after: "/galeri/dispenser/after-dispenser1.jpeg" },
    // { id: 7, category: "dispenser", before: "/galeri/dispenser/before-dispenser2.jpeg", after: "/galeri/dispenser/after-dispenser2.jpeg" },
    // { id: 8, category: "dispenser", before: "/galeri/dispenser/before-dispenser2.jpeg", after: "/galeri/dispenser/after-dispenser3.jpeg" },
    // { id: 9, category: "dispenser", before: "/galeri/dispenser/before-dispenser4.jpeg", after: "/galeri/dispenser/after-dispenser4.jpeg" },
    // { id: 10, category: "dispenser", before: "/galeri/dispenser/before-dispenser5.jpeg", after: "/galeri/dispenser/after-dispenser5.jpeg" },

    // 💧 Dispenser
    { id: 11, category: "kompor", before: "/galeri/kompor/before-kompor1.jpeg", after: "/galeri/kompor/after-kompor1.jpeg" },
    // { id: 12, category: "kompor", before: "/galeri/kompor/before-kompor2.jpeg", after: "/galeri/kompor/after-kompor2.jpeg" },
    // { id: 13, category: "kompor", before: "/galeri/kompor/before3.jpeg", after: "/galeri/kompor/after-kompor3.jpeg" },
    // { id: 14, category: "kompor", before: "/galeri/kompor/before4.jpeg", after: "/galeri/kompor/after-kompor4.jpeg" },
    // { id: 15, category: "kompor", before: "/galeri/kompor/before5.jpeg", after: "/galeri/kompor/after-kompor5.jpeg" },

    // 🌬️ AC
    { id: 16, category: "ac", before: "/galeri/ac/before-ac1.jpeg", after: "/galeri/ac/after-ac1.jpeg" },
    { id: 17, category: "ac", before: "/galeri/ac/before-ac2.jpeg", after: "/galeri/ac/after-ac2.jpeg" },
    { id: 18, category: "ac", before: "/galeri/ac/before-ac3.jpeg", after: "/galeri/ac/after-ac3.jpeg" },
    { id: 19, category: "ac", before: "/galeri/ac/before-ac4.jpeg", after: "/galeri/ac/after-ac4.jpeg" },

    // 🌬️ AC
    { id: 21, category: "Water Heater", before: "/galeri/waterheater/before-waterheater1.jpeg", after: "/galeri/waterheater/after-waterheater1.jpeg" },
    { id: 22, category: "Water Heater", before: "/galeri/waterheater/before-waterheater2.jpeg", after: "/galeri/waterheater/after-waterheater2.jpeg" },
    { id: 23, category: "Water Heater", before: "/galeri/waterheater/before-waterheater3.jpeg", after: "/galeri/waterheater/after-waterheater3.jpeg" },
    { id: 24, category: "Water Heater", before: "/galeri/waterheater/before-waterheater4.jpeg", after: "/galeri/waterheater/after-waterheater4.jpeg" },
    { id: 25, category: "Water Heater", before: "/galeri/waterheater/before-waterheater5.jpeg", after: "/galeri/waterheater/after-waterheater5.jpeg" },
  ];

  const filters = [
    { key: "all", label: "Semua" },
    { key: "mesin-cuci", label: "Mesin Cuci" },
    { key: "kompor", label: "kompor" },
    { key: "dispenser", label: "Dispenser" },
    { key: "ac", label: "AC" },
    { key: "Water Heater", label: "WaterHeater" },
  ];

  const filteredData =
    activeFilter === "all"
      ? data
      : data.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Before & After
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeFilter === f.key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Foto Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="flex">
                {/* Before */}
                <div className="w-1/2 relative">
                  <img
                    src={item.before}
                    alt="Before"
                    className="h-40 w-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="w-1/2 relative">
                  <img
                    src={item.after}
                    alt="After"
                    className="h-40 w-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
