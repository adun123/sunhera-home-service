import { useState } from "react";

export default function BeforeAfter() {
  const [activeFilter, setActiveFilter] = useState("all");

  const data = [
    {
      id: 1,
      category: "mesin-cuci",
      before: "/galeri/mesincucikotor.jpeg",
      after: "/galeri/mesincucuibersih.jpeg",
    },
    {
      id: 2,
      category: "kulkas",
      before: "/images/before-kulkas.jpg",
      after: "/images/after-kulkas.jpg",
    },
    {
      id: 3,
      category: "dispenser",
      before: "/images/before-dispenser.jpg",
      after: "/images/after-dispenser.jpg",
    },
    {
      id: 4,
      category: "ac",
      before: "/images/before-ac.jpg",
      after: "/images/after-ac.jpg",
    },
  ];

  const filters = [
    { key: "all", label: "Semua" },
    { key: "mesin-cuci", label: "Mesin Cuci" },
    { key: "kulkas", label: "Kulkas" },
    { key: "dispenser", label: "Dispenser" },
    { key: "ac", label: "AC" },
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
