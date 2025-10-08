import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/30 backdrop-blur-xl shadow-md"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/logo/logo-sunera.png"
            alt="Sunera Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-black">
          {[
            { id: "hero", label: "Home" },
            { id: "layanan", label: "Layanan" },
            { id: "services", label: "Jasa Kami" },
            { id: "galeri", label: "Galeri" },
            { id: "testimoni", label: "Testimoni" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-blue-300 transition"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl absolute right-6 z-[1100]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay background */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible z-[1000]" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white/20 backdrop-blur-2xl shadow-2xl transform transition-transform duration-500 z-[1050] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-8 text-black text-lg font-semibold">
          {[
            { id: "", label: "" },
            
            { id: "", label: "" },
            { id: "", label: "jasa kami " },

            { id: "services", label: "Jasa Kami" },
            { id: "layanan", label: "Layanan" },
            { id: "galeri", label: "Galeri" },
            { id: "testimoni", label: "Testimoni" },
            
          ].map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`hover:text-blue-300 transition transform ${
                menuOpen
                  ? "translate-x-0 opacity-100 delay-[" + i * 100 + "ms]"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transition: "all 0.4s ease",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
