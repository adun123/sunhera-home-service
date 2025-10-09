export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand & Deskripsi */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Sunera Teknik
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
              <a href="#home" className="hover:text-white transition">
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
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
          <li>
            <a
              href="https://wa.me/6285150973294?text=Halo%20Admin%2C%20saya%20ingin%20bergabung%20menjadi%20mitra%20Sunhera."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
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
            <li>CS Sunera Teknik</li>
            <li>📞 +62-851-5097-3294</li>
            <li>✉️ cs@sunerateknik.com</li>
            <li>Direktorat Jenderal Perlindungan Konsumen</li>
            <li>Kementerian Perdagangan Republik Indonesia</li>
            <li>📞 +62-851-5097-3294</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          Syarat dan Ketentuan | Kebijakan Privasi
        </p>
        <p className="mt-2">
          © 2025 Sunera Teknik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
