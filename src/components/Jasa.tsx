"use client";

import { useState } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"service" | "perawatan">("service");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const data = {
    service: [
       {
        name: "Mesin Cuci",
        desc: "Perbaikan mesin cuci rusak atau bocor dengan teknisi ahli.",
        img: "https://via.placeholder.com/300x200.png?text=Mesin+Cuci",
      },
      {
        name: "Kompor",
        desc: "Service kompor gas & listrik dengan penanganan aman.",
        img: "https://via.placeholder.com/300x200.png?text=Kompor",
      },
      {
        name: "Kulkas",
        desc: "Perbaikan kulkas segala merk dengan cepat dan rapi.",
        img: "https://via.placeholder.com/300x200.png?text=Kulkas",
      },
      {
        name: "AC",
        desc: "Service AC cepat, profesional, dan bergaransi.",
        img: "https://via.placeholder.com/300x200.png?text=AC",
      },
      {
        name: "Water Heater",
        desc: "Perbaikan water heater untuk mandi nyaman setiap hari.",
        img: "https://via.placeholder.com/300x200.png?text=AC",
      },
       {
        name: "Dispenser",
        desc: "Per ",
        img: "https://via.placeholder.com/300x200.png?text=AC",
      },
     
    
    ],
    perawatan: [
      {
        name: "Mesin Cuci",
        desc: "Perawatan rutin agar performa mesin cuci tetap maksimal.",
        img: "https://via.placeholder.com/300x200.png?text=Mesin+Cuci",
      },
       {
        name: "Kompor",
        desc: ":Perawatan  ",
        img: "https://via.placeholder.com/300x200.png?text=Mesin+Cuci",
      },
        {
        name: "AC",
        desc: ":Perawatan  ",
        img: "https://via.placeholder.com/300x200.png?text=Mesin+Cuci",
      },
        {
        name: "Kulkas",
        desc: ":Perawatan  ",
        img: "https://via.placeholder.com/300x200.png?text=Mesin+Cuci",
      },
      {
        name: "Dispenser",
        desc: "Pembersihan dispenser agar tetap higienis dan tahan lama.",
        img: "https://via.placeholder.com/300x200.png?text=Dispenser",
      },
      {
        name: "Water Heater",
        desc: ":Perawatan  ",
        img: "https://via.placeholder.com/300x200.png?text=Mesin+Cuci",
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Jasa Kami
        </h2>

        {/* Card utama */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Jasa Service */}
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-5 text-sky-700">
              Jasa Service
            </h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-sky-600" /> Perbaikan cepat &
                bergaransi
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-sky-600" /> Teknisi
                berpengalaman
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-sky-600" /> Bisa panggilan ke
                rumah
              </li>
            </ul>
            <p className="font-semibold text-lg">
              Harga mulai dari{" "}
              <span className="text-sky-600 font-bold">Rp200.000</span>
            </p>
          </div>

          {/* Jasa Perawatan */}
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-5 text-emerald-700">
              Jasa Perawatan
            </h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-600" /> Pembersihan
                menyeluruh
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-600" /> Mencegah
                kerusakan dini
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-600" /> Bikin peralatan
                lebih awet
              </li>
            </ul>
            <p className="font-semibold text-lg">
              Harga mulai dari{" "}
              <span className="text-emerald-600 font-bold">Rp150.000</span>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["service", "perawatan"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as "service" | "perawatan");
                setOpenItem(null);
              }}
              className={`px-6 py-2 rounded-full font-medium border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab === "service" ? "Jasa Service" : "Jasa Perawatan"}
            </button>
          ))}
        </div>

        {/* Kartu Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {data[activeTab].map((item) => (
            <div
              key={item.name}
              className="min-w-[220px] md:min-w-[250px] bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-300"
              onClick={() =>
                setOpenItem(openItem === item.name ? null : item.name)
              }
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
              </div>

              {/* Detail dropdown */}
              {openItem === item.name && (
                <div className="p-4 border-t text-center bg-gray-50">
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    <FaWhatsapp /> Hubungi Sekarang
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
