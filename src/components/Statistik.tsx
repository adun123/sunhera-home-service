"use client";

import { useState, useEffect, type JSX } from "react";
import { FaUsers, FaTools, FaAward } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

interface StatItem {
  icon: JSX.Element;
  value: number;
  label: string;
  target: number;
}

export default function Statistik() {
  const [stats, setStats] = useState<StatItem[]>([
    { icon: <FaUsers />, value: 0, label: "Total Customer", target: 50 },
    { icon: <MdDevices />, value: 0, label: "Perangkat Ditangani", target: 25 },
    { icon: <FaTools />, value: 0, label: "Teknisi Profesional", target: 15 },
    { icon: <FaAward />, value: 0, label: "Tahun Pengalaman", target: 5 },
  ]);

  // Animasi counter
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) =>
          stat.value < stat.target
            ? { ...stat, value: stat.value + 1 }
            : stat
        )
      );
    }, 50);

    const isDone = stats.every((s) => s.value >= s.target);
    if (isDone) clearInterval(interval);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md rounded-2xl p-5 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="text-sky-600 text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-sky-700 mb-1">
                {stat.value}+
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
