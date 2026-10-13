import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistik from "./components/Statistik";
import Layanan from "./components/Why";
import Services from "./components/Jasa";
import Galeri from "./components/Galeri";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />

      <section id="hero"><Hero /></section>
      <section><About/></section>
      <section id="statistik"><Statistik /></section>
      <section id="layanan"><Layanan /></section>
      <section id="services"><Services /></section>
      <section id="galeri"><Galeri /></section>
      <section id="testimoni"><Testimoni /></section>

      <Footer />
    </div>
  );
}
