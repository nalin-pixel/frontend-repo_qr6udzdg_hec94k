import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const courses = [
  {
    title: 'Asbest Grundkurs',
    duration: '4 dagar',
    price: '11 500 kr',
    description: 'Lär dig hantera asbest enligt AFS 2006:1 §36. Ger full behörighet för rivning och sanering.'
  },
  {
    title: 'Fallskydd – användare',
    duration: '4 timmar',
    price: '2 300 kr',
    description: 'Förstå riskerna vid arbete över 2 meter och använd personlig skyddsutrustning rätt.'
  },
  {
    title: 'Säkra lyft och signalman',
    duration: '4 timmar',
    price: '2 100 kr',
    description: 'Lär dig säker användning av lyftanordningar och minska risken för olyckor.'
  },
  {
    title: 'Brandfarliga heta arbeten',
    duration: '1 dag',
    price: '2 600 kr',
    description: 'Obligatorisk kurs för alla som arbetar med värme och gnistor.'
  },
  {
    title: 'Lift / Mobila arbetsplattformar',
    duration: '1 dag',
    price: '2 600 kr',
    description: 'Lär dig arbeta effektivt och säkert med mobila plattformar.'
  }
];

function CourseCard({ c, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{c.description}</p>
        </div>
        <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-hover:scale-110 transition">
          <ArrowUpRight size={18} />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-slate-700">
        <span className="rounded-full bg-slate-100 px-3 py-1">Tid: {c.duration}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">Pris: {c.price}</span>
      </div>
    </motion.div>
  );
}

export default function Training() {
  const memoCourses = useMemo(() => courses, []);
  return (
    <section id="training" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-slate-900"
          style={{ fontFamily: 'Poppins, Montserrat, system-ui' }}
        >
          Utbildningsutbud
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-700"
        >
          Vi utbildar för en säkrare arbetsplats – alla utbildningar registreras i ID06-kompetensdatabasen. Hos oss hittar du både grundkurser och repetitionsutbildningar.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {memoCourses.map((c, idx) => (
            <CourseCard key={c.title} c={c} delay={idx * 0.08} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-40 h-72 bg-gradient-to-t from-[#6b2fbf]/10 to-transparent blur-2xl" />
    </section>
  );
}
