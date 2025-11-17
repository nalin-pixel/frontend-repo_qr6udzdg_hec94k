import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-[#6b2fbf] to-[#8c3bff]" />
            <span className="text-lg font-semibold">JK Utbildning</span>
          </div>
          <nav className="flex gap-6 text-sm text-white/80">
            <a href="#home" className="hover:text-white">Hem</a>
            <a href="#about" className="hover:text-white">Om oss</a>
            <a href="#training" className="hover:text-white">Utbildningar</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
          </nav>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-center md:text-left text-white/70 text-sm">
          © 2025 JK Utbildning – Din kursledare med fokus på säkerheten.
        </div>
      </div>
    </footer>
  );
}
