import React from 'react';
import { BookOpen, Quran, Palette, Tent } from 'lucide-react';

const activities = [
  {
    icon: Quran,
    title: 'Tahfiz & Tadarus',
    desc: 'Pembinaan Al-Qur\'an harian dengan target hafalan bertahap dan tahsin bersanad.',
  },
  {
    icon: BookOpen,
    title: 'Pembelajaran Tematik',
    desc: 'Integrasi sains, matematika, dan bahasa dengan pendekatan aktif, kreatif, dan menyenangkan.',
  },
  {
    icon: Palette,
    title: 'Seni & Kreativitas',
    desc: 'Melatih ekspresi diri melalui kaligrafi, melukis, drama, dan karya proyek.',
  },
  {
    icon: Tent,
    title: 'Karakter & Kepemimpinan',
    desc: 'Pembiasaan adab, kepemimpinan siswa, pramuka, dan kegiatan sosial kemasyarakatan.',
  },
];

const Activities = () => {
  return (
    <section id="kegiatan" className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Kegiatan Unggulan</h2>
          <p className="mt-2 text-emerald-700/80">Program harian dan ekstrakurikuler untuk menumbuhkan iman, ilmu, dan akhlak.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white border border-emerald-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-sm text-emerald-700/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
