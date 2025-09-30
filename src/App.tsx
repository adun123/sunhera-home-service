import { useEffect, useState } from "react";
import { FaWhatsapp, FaUsers, FaTools, FaAward } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import Galeri from "./components/Galeri";
import Services from "./components/Jasa";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";
export default function Home() {
  // counter states
  const [customers, setCustomers] = useState(0);
  const [devices, setDevices] = useState(0);
  const [technicians, setTechnicians] = useState(0);
  const [years, setYears] = useState(0);
 const items = [
    {
      img: "https://via.placeholder.com/300x200.png?text=Teknisi+Handal",
      title: "Teknisi Handal",
      desc: "Tim berpengalaman dan terlatih untuk menangani berbagai peralatan elektronik.",
    },
    {
      img: "https://via.placeholder.com/300x200.png?text=Harga+Transparan",
      title: "Harga Transparan",
      desc: "Biaya jelas tanpa biaya tersembunyi, sesuai dengan layanan yang Anda pilih.",
    },
    {
      img: "https://via.placeholder.com/300x200.png?text=Respon+Cepat",
      title: "Respon Cepat",
      desc: "Layanan cepat dan tepat waktu, siap melayani kebutuhan mendesak Anda.",
    },
    {
      img: "https://via.placeholder.com/300x200.png?text=Garansi+Layanan",
      title: "Garansi Layanan",
      desc: "Jaminan kualitas layanan dengan garansi setelah perbaikan.",
    },
  ];
 
  // animate counters
  useEffect(() => {
    let c = 0, d = 0, t = 0, y = 0;

    const interval = setInterval(() => {
      if (c < 50) setCustomers(++c);
      if (d < 30) setDevices(++d);
      if (t < 15) setTechnicians(++t);
      if (y < 5) setYears(++y);

      if (c >= 50 && d >= 30 && t >= 15 && y >= 5) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans">
      {/* Section 1: Hero */}
      <section className="relative bg-gray-900 text-white">
        {/* Background image + overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/bg-home.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Perawatan & Perbaikan Elektronik Rumah Anda
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Sunhera Home Service hadir untuk memberikan solusi cepat,
              transparan, dan terpercaya. Dari AC hingga mesin cuci – semua
              bisa kami tangani.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              <FaWhatsapp /> Hubungi Sekarang
            </a>
          </div>

          {/* Foto orang */}
          {/* <div className="flex justify-center md:justify-end">
            <img
              src="public/images/bg-teknisi.png"
              alt="Foto Teknisi"
              className="rounded-2xl shadow-lg object-cover"
            />
          </div> */}
        </div>
      </section>

      {/* Section 2: Statistik */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Customers */}
          <div className="p-6 shadow rounded-xl">
            <FaUsers className="text-blue-600 text-5xl mx-auto mb-3" />
            <h2 className="text-5xl font-bold text-blue-600 mb-2">
              {customers}+
            </h2>
            <p className="text-lg font-medium text-gray-700">Total Customer</p>
          </div>

          {/* Devices */}
          <div className="p-6 shadow rounded-xl">
            <MdDevices className="text-red-600 text-5xl mx-auto mb-3" />
            <h2 className="text-5xl font-bold text-red-600 mb-2">
              {devices}+
            </h2>
            <p className="text-lg font-medium text-gray-700">
              Alat Elektronik Ditangani
            </p>
          </div>

          {/* Technicians */}
          <div className="p-6 shadow rounded-xl">
            <FaTools className="text-black text-5xl mx-auto mb-3" />
            <h2 className="text-5xl font-bold text-black mb-2">
              {technicians}+
            </h2>
            <p className="text-lg font-medium text-gray-700">
              Teknisi Profesional
            </p>
          </div>

          {/* Years of Experience */}
          <div className="p-6 shadow rounded-xl">
            <FaAward className="text-blue-500 text-5xl mx-auto mb-3" />
            <h2 className="text-5xl font-bold text-blue-500 mb-2">{years}+</h2>
            <p className="text-lg font-medium text-gray-700">
              Tahun Pengalaman
            </p>
          </div>
        </div>
      </section>

       <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Mengapa Memilih Kami
        </h2>

        {/* Layout zig-zag */}
        <div className="grid grid-cols-2 gap-6">
          {/* Foto 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={items[0].img} alt={items[0].title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{items[0].title}</h3>
              <p className="text-gray-600 text-sm">{items[0].desc}</p>
            </div>
          </div>

          {/* Foto 2 (turun sedikit) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-10">
            <img src={items[1].img} alt={items[1].title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{items[1].title}</h3>
              <p className="text-gray-600 text-sm">{items[1].desc}</p>
            </div>
          </div>

          {/* Foto 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={items[2].img} alt={items[2].title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{items[2].title}</h3>
              <p className="text-gray-600 text-sm">{items[2].desc}</p>
            </div>
          </div>

          {/* Foto 4 (turun sedikit) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-10">
            <img src={items[3].img} alt={items[3].title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{items[3].title}</h3>
              <p className="text-gray-600 text-sm">{items[3].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* Section Services */}
     <Services />

   

      {/* Section Galeri */}
      <Galeri />


      <Testimoni/>


      <Footer />
    
    </div>



  );
}
