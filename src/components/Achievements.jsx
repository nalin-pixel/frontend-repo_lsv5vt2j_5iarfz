import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Juara 1 Lomba Tahfiz Kabupaten',
    desc: 'Siswa Ar-Raudhah meraih juara pertama kategori juz 30 tingkat kabupaten.',
    year: '2024',
  },
  {
    icon: Medal,
    title: 'Finalis Olimpiade Sains',
    desc: 'Tim sains kami berhasil menembus babak final olimpiade sains pelajar.',
    year: '2023',
  },
  {
    icon: Star,
    title: 'Sekolah Berbudaya Bersih',
    desc: 'Penghargaan atas konsistensi program kebersihan dan penghijauan sekolah.',
    year: '2022',
  },
];

const Achievements = () => {
  return (
    <section id="prestasi" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Prestasi</h2>
          <p className="mt-2 text-emerald-700/80">Kebanggaan kami dalam menorehkan prestasi akademik dan non-akademik.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map(({ icon: Icon, title, desc, year }) => (
            <div key={title} className="rounded-xl border border-emerald-200 p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 text-emerald-700">
                <Icon className="w-6 h-6" />
                <span className="text-sm font-semibold">{year}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-sm text-emerald-700/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
