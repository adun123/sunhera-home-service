import { useState } from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"service" | "perawatan" | "borsumur">("service");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const data = {
    service: [
      {
        name: "Mesin Cuci",
        desc: "Perbaikan mesin cuci rusak, bocor, atau tidak berputar dengan teknisi berpengalaman.",
        img: "/service/service-mesincuci.png",
      },
      {
        name: "Kompor",
        desc: "Service kompor gas dan listrik, menangani masalah api kecil, bocor, atau tidak menyala.",
        img: "/service/service-kompor.png",
      },
      {
        name: "Kulkas",
        desc: "Perbaikan kulkas berbagai merk, mengatasi tidak dingin, bocor, atau suara bising.",
        img: "/service/service-kulkas.png",
      },
      {
        name: "AC",
        desc: "Service dan isi freon AC dengan cepat, profesional, dan bergaransi.",
        img: "/service/service-ac.png",
      },
      {
        name: "Water Heater",
        desc: "Perbaikan water heater mati, bocor, atau tidak panas agar mandi tetap nyaman.",
        img: "/service/service-waterheater.png",
      },
      {
        name: "Dispenser",
        desc: "Perbaikan dispenser yang tidak mengeluarkan air atau tidak panas/dingin dengan cepat dan rapi.",
        img: "/service/service-dispenser.png",
      },
    ],
    perawatan: [
      {
        name: "Mesin Cuci",
        desc: "Perawatan rutin agar performa mesin cuci tetap maksimal dan bebas bau.",
        img: "/perawatan/perawatan-mesincuci.png",
      },
      {
        name: "Kompor",
        desc: "Pembersihan menyeluruh pada tungku dan saluran gas untuk menjaga keamanan serta efisiensi panas.",
        img: "/perawatan/perawatan-kompor.png",
      },
      {
        name: "AC",
        desc: "Membersihkan filter dan unit AC agar udara tetap sejuk, bersih, dan hemat listrik.",
        img: "/perawatan/perawatan-ac.png",
      },
      {
        name: "Kulkas",
        desc: "Perawatan rutin untuk menjaga suhu stabil dan mencegah bau tak sedap di dalam kulkas.",
        img: "/perawatan/perawatan-kulkas.png",
      },
      {
        name: "Dispenser",
        desc: "Pembersihan dispenser agar tetap higienis dan aman digunakan setiap hari.",
        img: "/perawatan/perawatan-dispenser.png",
      },
      {
        name: "Water Heater",
        desc: "Perawatan sistem pemanas air agar tetap efisien dan memperpanjang usia pemakaian.",
        img: "/perawatan/perawatan-waterheater.png",
      },
    ],
    borsumur: [
      {
        name: "Perbaikan Pompa Air",
        desc: "Perbaikan pompa air rusak, bocor, atau tidak berfungsi dengan teknisi berpengalaman.",
        img: "/borsumur/perbaikanpompa.jpeg",
      },
      {
        name: "Pembuatan Sumur Bor",
        desc: "Pembuatan sumur bor untuk kebutuhan air bersih dengan metode modern dan efisien.",
        img: "/borsumur/sumurbor.jpeg",
      },
      {
        name: "Penangkal Petir",
        desc: "Pemasangan penangkal petir untuk melindungi bangunan dari sambaran petir dan kerusakan.",
        img: "/borsumur/penangkalpetir.jpeg",
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Jasa Service */}
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-5 text-sky-700">Jasa Service</h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-sky-600" /> Perbaikan cepat & bergaransi</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-sky-600" /> Teknisi berpengalaman</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-sky-600" /> Bisa panggilan ke rumah</li>
            </ul>
            <p className="font-semibold text-lg">
              Harga mulai dari <span className="text-sky-600 font-bold">Rp200.000</span>
            </p>
          </div>

          {/* Jasa Perawatan */}
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-5 text-emerald-700">Jasa Perawatan</h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-600" /> Pembersihan menyeluruh</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-600" /> Mencegah kerusakan dini</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-emerald-600" /> Bikin peralatan lebih awet</li>
            </ul>
            <p className="font-semibold text-lg">
              Harga mulai dari <span className="text-emerald-600 font-bold">Rp150.000</span>
            </p>
          </div>

          {/* Jasa Bor Sumur */}
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-5 text-indigo-700">Jasa Bor Sumur</h3>
            <ul className="space-y-2 mb-6 text-gray-600">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-indigo-600" /> Pengeboran modern & efisien</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-indigo-600" /> Kualitas air bersih terjamin</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-indigo-600" /> Dikerjakan oleh ahli berpengalaman</li>
            </ul>
            <p className="font-semibold text-lg">
              Harga mulai dari <span className="text-indigo-600 font-bold">Rp500.000</span>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {[
            { id: "service", label: "Jasa Service" },
            { id: "perawatan", label: "Jasa Perawatan" },
            { id: "borsumur", label: "Bor Sumur" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as "service" | "perawatan" | "borsumur");
                setOpenItem(null);
              }}
              className={`px-6 py-2 rounded-full font-medium border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Kartu Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {data[activeTab].map((item) => (
            <div
              key={item.name}
              className="min-w-[220px] md:min-w-[250px] bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-300"
              onClick={() => setOpenItem(openItem === item.name ? null : item.name)}
            >
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              </div>

              {openItem === item.name && (
                <div className="p-4 border-t text-center bg-gray-50">
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <a
                    href="https://wa.me/6285150973294"
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
