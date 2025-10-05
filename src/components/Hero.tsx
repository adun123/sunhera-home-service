"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/images/bg-kompor.png",
    title: "Perawatan Kompor Rumah Anda",
    description: "Kami siap memperbaiki kompor gas & listrik dengan cepat dan aman.",
  },
  {
    image: "/images/bg-mesincuci.png",
    title: "Servis Mesin Cuci Profesional",
    description: "Layanan cepat dan bergaransi untuk semua merek mesin cuci.",
  },
  {
    image: "/images/bg-home.jpg",
    title: "Perbaikan Dispenser Air",
    description: "Jaga dispenser Anda tetap bersih, dingin, dan aman digunakan.",
  },
  {
    image: "/images/bg-all.png",
    title: "Layanan Lengkap Elektronik Rumah",
    description: "Dari AC, kulkas, hingga kompor – kami siap membantu semua kebutuhan Anda.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Geser otomatis setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const { image, title, description } = slides[current];

  return (
     <section className="relative bg-gray-900 text-white overflow-hidden h-[90vh] md:h-[85vh]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center h-full">
        {/* Teks */}
        <div className="transition-all duration-700">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-200 mb-6">{description}</p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            <FaWhatsapp /> Hubungi Sekarang
          </a>
        </div>

        {/* Gambar teknisi */}
        {/* <div className="flex justify-center md:justify-end">
          <img
            src="/images/bg-teknisi.png"
            alt="Foto Teknisi"
            className="rounded-2xl shadow-lg object-cover w-80 md:w-96 lg:w-[450px] h-[400px] md:h-[450px] lg:h-[500px]"
          />
        </div> */}
      </div>

      {/* Tombol Navigasi */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full"
      >
        <FaChevronRight />
      </button>

      {/* Indikator */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
