import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesan Anda telah terkirim.');
    e.currentTarget.reset();
  };

  return (
    <section id="kontak" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Kontak & Pendaftaran</h2>
          <p className="mt-2 text-emerald-700/80">Hubungi kami untuk informasi pendaftaran, kurikulum, dan kunjungan sekolah.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={onSubmit} className="bg-white border border-emerald-200 rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-emerald-800 mb-1">Nama Lengkap</label>
                <input required type="text" className="w-full rounded-md border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm text-emerald-800 mb-1">Email</label>
                <input required type="email" className="w-full rounded-md border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="email@contoh.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-emerald-800 mb-1">Pesan</label>
                <textarea required rows="4" className="w-full rounded-md border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Tulis pertanyaan atau kebutuhan Anda"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-md font-medium hover:bg-emerald-700">
              <Send className="w-4 h-4" /> Kirim Pesan
            </button>
            {status && <p className="mt-3 text-emerald-700 text-sm">{status}</p>}
          </form>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-emerald-700/70">Telepon</p>
                <p className="font-semibold text-emerald-900">(021) 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-emerald-700/70">Email</p>
                <p className="font-semibold text-emerald-900">info@arraudhah.sch.id</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-emerald-700/70">Alamat</p>
                <p className="font-semibold text-emerald-900">Jl. Raudhah No. 7, Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden border border-emerald-200">
              <iframe
                title="Lokasi Ar-Raudhah"
                src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
