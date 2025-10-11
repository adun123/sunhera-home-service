import { useEffect, useRef } from "react";

export default function Testimoni() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Testimoni Pelanggan
        </h2>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        >
          {/* Testimoni 1 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              “Teknisi datang tepat waktu, AC saya kini dingin kembali. Layanan cepat dan ramah!”
            </p>
            <div>
              <h4 className="font-semibold text-sky-700">Budi Santoso</h4>
              <span className="text-sm text-gray-500">Tangerang Kota</span>
            </div>
          </div>

          {/* Testimoni 2 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              “Kulkas saya mati total, tapi setelah diperbaiki tim Sunhera langsung nyala normal lagi!”
            </p>
            <div>
              <h4 className="font-semibold text-sky-700">Siti Aminah</h4>
              <span className="text-sm text-gray-500">Ciledug</span>
            </div>
          </div>

          {/* Testimoni 3 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              “Pelayanan cepat, harga terjangkau, dan teknisinya sopan. Sangat direkomendasikan.”
            </p>
            <div>
              <h4 className="font-semibold text-sky-700">Agus Pratama</h4>
              <span className="text-sm text-gray-500">Serpong</span>
            </div>
          </div>

          {/* Testimoni 4 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              “Perawatan mesin cuci hasilnya bersih dan halus, sekarang jadi seperti baru lagi!”
            </p>
            <div>
              <h4 className="font-semibold text-sky-700">Lina Marlina</h4>
              <span className="text-sm text-gray-500">Ciputat</span>
            </div>
          </div>

          {/* Testimoni 5 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              “Panggil untuk servis dispenser, datang cepat dan hasilnya memuaskan. Terbaik di Tangerang!”
            </p>
            <div>
              <h4 className="font-semibold text-sky-700">Rahmat Hidayat</h4>
              <span className="text-sm text-gray-500">Bintaro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
