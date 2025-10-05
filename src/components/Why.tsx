export default function Layanan(){

    const items = [
        {
          img: "jasa/why-1.png",
          title: "Teknisi Handal",
          desc: "Tim berpengalaman dan terlatih untuk menangani berbagai peralatan elektronik.",
        },
        {
          img: "jasa/why-2.png",
          title: "Harga Transparan",
          desc: "Biaya jelas tanpa biaya tersembunyi, sesuai dengan layanan yang Anda pilih.",
        },
        {
          img: "jasa/why-3.png",
          title: "Respon Cepat",
          desc: "Layanan cepat dan tepat waktu, siap melayani kebutuhan mendesak Anda.",
        },
        {
          img: "jasa/why-4.png",
          title: "Garansi Layanan",
          desc: "Jaminan kualitas layanan dengan garansi setelah perbaikan.",
        },
      ];

    return (
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
    );
}