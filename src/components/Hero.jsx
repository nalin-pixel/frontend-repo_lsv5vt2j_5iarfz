import React from 'react';
import { GraduationCap, Phone, Menu } from 'lucide-react';

const Hero = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="relative bg-gradient-to-b from-emerald-700 via-emerald-600 to-emerald-500 text-white">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-wide">
          <div className="bg-white/10 p-2 rounded-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-lg">Ar-Raudhah</span>
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-white/10">
          <Menu className="w-6 h-6" />
        </button>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#kegiatan" className="hover:text-emerald-100">Kegiatan</a></li>
          <li><a href="#prestasi" className="hover:text-emerald-100">Prestasi</a></li>
          <li><a href="#kontak" className="hover:text-emerald-100">Kontak</a></li>
          <li>
            <a href="#kontak" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-medium px-4 py-2 rounded-md shadow hover:opacity-90">
              <Phone className="w-4 h-4" /> Hubungi Kami
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-2 bg-white/10 rounded-md p-4">
            <li><a href="#kegiatan" className="block py-2" onClick={() => setOpen(false)}>Kegiatan</a></li>
            <li><a href="#prestasi" className="block py-2" onClick={() => setOpen(false)}>Prestasi</a></li>
            <li><a href="#kontak" className="block py-2" onClick={() => setOpen(false)}>Kontak</a></li>
          </ul>
        </div>
      )}

      {/* Hero content */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-emerald-100 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Sekolah Islam Terpadu
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Membangun Generasi Qur'ani, Berakhlak Mulia, dan Berprestasi
            </h1>
            <p className="mt-4 text-emerald-50/90 text-lg">
              Ar-Raudhah adalah sekolah Islam yang menghadirkan pembelajaran holistik: 
              penguatan Al-Qur'an, sains, dan karakter dalam suasana yang hangat dan inspiratif.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#kegiatan" className="inline-flex justify-center items-center bg-white text-emerald-700 px-5 py-3 rounded-md font-medium shadow hover:opacity-95">
                Jelajahi Kegiatan
              </a>
              <a href="#kontak" className="inline-flex justify-center items-center border border-white/40 px-5 py-3 rounded-md font-medium hover:bg-white/10">
                Daftar & Konsultasi
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-emerald-900/20 border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
              <div className="text-center p-8">
                <GraduationCap className="w-16 h-16 mx-auto mb-4" />
                <p className="text-emerald-50/90">
                  Lingkungan belajar hijau, nyaman, dan menyenangkan untuk tumbuhnya potensi terbaik putra-putri Anda.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-white text-emerald-700 rounded-xl shadow-lg p-4">
                <p className="text-sm font-semibold">Penerimaan Peserta Didik Baru</p>
                <p className="text-xs text-emerald-700/80">Tahun Ajaran 2025/2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
