export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand & Deskripsi */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Sunhera Home Service
          </h2>
          <p className="text-sm leading-relaxed">
            Platform tepercaya dalam penyedia jasa service & perawatan rumah
            tangga. Profesional, praktis, dan aman untuk semua kebutuhan Anda.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Layanan
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#testimoni" className="hover:text-white transition">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#mitra" className="hover:text-white transition">
                Gabung Jadi Mitra
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
          <ul className="space-y-2 text-sm">
            <li>Layanan Pengaduan Konsumen</li>
            <li>CS Sunhera Home Service</li>
            <li>📞 +62-812-3456-7890</li>
            <li>✉️ cs@sunerahomeservice.com</li>
            <li>Direktorat Jenderal Perlindungan Konsumen</li>
            <li>Kementerian Perdagangan Republik Indonesia</li>
            <li>📞 +62-853-1111-1010</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          Syarat dan Ketentuan | Kebijakan Privasi
        </p>
        <p className="mt-2">
          © 2025 Sunhera Home Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
