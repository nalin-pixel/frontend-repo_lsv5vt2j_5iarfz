import React from 'react';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-emerald-900 bg-white">
      <Hero />
      <Activities />
      <Achievements />
      <Contact />
      <footer className="py-10 border-t border-emerald-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-700/70">© {new Date().getFullYear()} Ar-Raudhah. Seluruh hak cipta dilindungi.</p>
          <div className="text-sm text-emerald-700/70">"Menumbuhkan iman, ilmu, dan akhlak mulia."</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
