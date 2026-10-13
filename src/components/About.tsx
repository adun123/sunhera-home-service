export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* FOTO */}
        <div className="flex justify-center">
          <img
            src="/images/bg-home3.jpeg"
            alt="Tentang Sunhera Teknik Tangerang"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* TEKS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tentang <span className="text-sky-600">Sunhera Teknik</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify mb-5">
            <strong>Sunhera Teknik</strong> adalah penyedia layanan 
            <strong> jasa service dan perawatan elektronik rumah tangga di Tangerang dan Tangerang Selatan</strong>. 
            Kami hadir sebagai solusi terpercaya untuk masyarakat di kawasan 
            <strong> Tangerang Raya</strong> yang membutuhkan layanan teknisi berpengalaman dengan pengerjaan cepat dan hasil rapi.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-5">
            Kami menangani berbagai layanan seperti 
            <strong> service AC, service mesin cuci, perbaikan kulkas, service kompor, water heater, dispenser</strong>, 
            serta layanan <strong>bor sumur dan perbaikan pompa air</strong>. 
            Semua layanan tersedia untuk seluruh area <strong>Tangerang Selatan, Tangerang Kota, Ciputat, BSD, Bintaro, Ciledug</strong> dan sekitarnya.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            Dengan tim teknisi profesional, harga transparan, dan garansi hasil kerja, 
            Sunhera Teknik berkomitmen menjadi layanan 
            <strong> jasa service Tangerang Selatan yang terpercaya, responsif, dan berkualitas tinggi</strong>.  
            Kami siap membantu kebutuhan rumah Anda kapan pun dibutuhkan.
          </p>
        </div>

      </div>
    </section>
  );
}
