import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const courses = [
  'Asbest Grundkurs',
  'Fallskydd – användare',
  'Säkra lyft och signalman',
  'Brandfarliga heta arbeten',
  'Lift / Mobila arbetsplattformar',
];

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const courseOptions = useMemo(() => courses, []);

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch(`${backend}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          company: payload.company,
          phone: payload.phone,
          email: payload.email,
          course: payload.course,
          message: payload.message,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ type: 'success', msg: data.message });
        e.currentTarget.reset();
      } else {
        throw new Error(data?.detail || 'Något gick fel, försök igen.');
      }
    } catch (err) {
      setStatus({ type: 'error', msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#f5f5f5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-slate-900"
          style={{ fontFamily: 'Poppins, Montserrat, system-ui' }}
        >
          Boka utbildning
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-700"
        >
          Vill du boka en utbildning eller få mer information? Fyll i formuläret så kontaktar vi dig.
        </motion.p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
          >
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Namn" className="input" />
              <input name="company" placeholder="Företag" className="input" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="phone" placeholder="Telefon" className="input" />
                <input name="email" type="email" required placeholder="E-post" className="input" />
              </div>
              <select name="course" className="input" defaultValue={courseOptions[0]}>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <textarea name="message" rows="4" placeholder="Meddelande" className="input" />
            </div>
            <button disabled={loading} className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-[#6b2fbf] to-[#8c3bff] px-6 py-3 font-medium text-white shadow-lg shadow-purple-800/30 transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-400">
              {loading ? 'Skickar...' : 'Skicka bokning'}
            </button>
            {status && (
              <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-700' : 'text-red-600'}`}>{status.msg}</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
          >
            <div className="space-y-2 text-slate-700">
              <p className="font-semibold text-slate-900">JK Utbildning</p>
              <p>Kolstad Janerup AB</p>
              <p>Org.nr: 559257-9113</p>
              <p>Lokvägen 31A, 253 52 Påarp</p>
              <p className="mt-4">📧 utbildning@kolstad.se</p>
              <p>📞 0708-279000</p>
              <p>🧾 Fakturor: camilla@kolstads.se</p>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .input { @apply w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-400/40; }
      `}</style>
    </section>
  );
}
