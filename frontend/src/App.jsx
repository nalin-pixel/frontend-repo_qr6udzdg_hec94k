import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Menu } from 'lucide-react';

export default function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-2xl bg-black/60 text-white backdrop-blur border border-white/10 px-4 py-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-gradient-to-br from-[#6b2fbf] to-[#8c3bff]" />
              <span className="font-semibold">JK Utbildning</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="hover:text-purple-300">Om oss</a>
              <a href="#training" className="hover:text-purple-300">Utbildningar</a>
              <a href="#contact" className="hover:text-purple-300">Kontakt</a>
              <button onClick={scrollToContact} className="rounded-full bg-gradient-to-r from-[#6b2fbf] to-[#8c3bff] px-4 py-2 text-sm font-medium shadow-lg shadow-purple-800/30 hover:scale-[1.02] transition">
                Boka utbildning
              </button>
            </nav>
            <button className="md:hidden p-2"><Menu size={20} /></button>
          </div>
        </div>
      </header>

      <main className="[font-family:var(--font)]">
        <Hero onCTAClick={scrollToContact} />
        <About />
        <Training />
        <Contact ref={contactRef} />
      </main>

      <Footer />

      <style>{`
        :root{ --font: 'Poppins', 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; }
      `}</style>
    </div>
  );
}
