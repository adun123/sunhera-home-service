import { useEffect, useRef } from "react";

export default function Testimoni() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        // Kalau sudah di akhir, balik ke awal
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll ke kanan 1 card
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // 3 detik sekali geser

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-20 bg-white">
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
          {/* Card 1 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              "Teknisi datang tepat waktu, hasil service AC sangat memuaskan!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/images/user1.jpg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Budi Santoso</h4>
                <span className="text-sm text-gray-500">Jakarta</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              "Kulkas saya rusak parah, tapi berhasil diperbaiki dan masih dipakai sampai sekarang."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/images/user2.jpg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Siti Aminah</h4>
                <span className="text-sm text-gray-500">Bandung</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              "Pelayanan ramah, harga terjangkau, dan hasil memuaskan."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/images/user3.jpg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Agus Pratama</h4>
                <span className="text-sm text-gray-500">Surabaya</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="min-w-[280px] bg-gray-100 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">
              "Dispenser jadi bersih setelah perawatan, recommended!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/images/user4.jpg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Lina Marlina</h4>
                <span className="text-sm text-gray-500">Depok</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
