import { useState } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"service" | "perawatan">("service");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const data = {
    service: [
      { name: "Kulkas", desc: "Perbaikan kulkas segala merk.", img: "https://via.placeholder.com/150x100.png?text=Kulkas" },
      { name: "AC", desc: "Service AC cepat & bergaransi.", img: "https://via.placeholder.com/150x100.png?text=AC" },
      { name: "Mesin Cuci", desc: "Service mesin cuci rusak atau error.", img: "https://via.placeholder.com/150x100.png?text=Mesin+Cuci" },
      { name: "Kompor", desc: "Perbaikan kompor gas & listrik.", img: "https://via.placeholder.com/150x100.png?text=Kompor" },
    ],
    perawatan: [
      { name: "Mesin Cuci", desc: "Perawatan rutin agar tetap awet.", img: "https://via.placeholder.com/150x100.png?text=Mesin+Cuci" },
      { name: "Dispenser", desc: "Perawatan dispenser higienis & bersih.", img: "https://via.placeholder.com/150x100.png?text=Dispenser" },
    ],
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Jasa Kami
        </h2>

        {/* 2 Container: Service & Perawatan */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Jasa Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-bold mb-4">Jasa Service</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Perbaikan cepat & bergaransi
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Teknisi berpengalaman
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Bisa panggilan ke rumah
              </li>
            </ul>
            <p className="font-semibold text-lg">Harga mulai dari <span className="text-yellow-400">Rp.200.000</span></p>
          </div>

          {/* Jasa Perawatan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-green-600 hover:text-white transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-2xl font-bold mb-4">Jasa Perawatan</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Pembersihan menyeluruh
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Mencegah kerusakan dini
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle /> Bikin peralatan lebih awet
              </li>
            </ul>
            <p className="font-semibold text-lg">Harga mulai dari <span className="text-yellow-400">Rp.150.000</span></p>
          </div>
        </div>

        {/* Tab */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => { setActiveTab("service"); setOpenItem(null); }}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === "service"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            Jasa Service
          </button>
          <button
            onClick={() => { setActiveTab("perawatan"); setOpenItem(null); }}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === "perawatan"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            Jasa Perawatan
          </button>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {data[activeTab].map((item) => (
            <div
              key={item.name}
              className="min-w-[200px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
              onClick={() => setOpenItem(openItem === item.name ? null : item.name)}
            >
              <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </div>

              {/* Dropdown detail */}
              {openItem === item.name && (
                <div className="p-4 border-t text-center">
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
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
