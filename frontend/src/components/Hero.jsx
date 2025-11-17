import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const primary = 'from-[#6b2fbf] to-[#8c3bff]';

export default function Hero({ onCTAClick }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 pb-24 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs md:text-sm backdrop-blur border border-white/10"
        >
          Trygghet • Säkerhet • Framåtanda
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl"
          style={{ fontFamily: 'Poppins, Montserrat, system-ui' }}
        >
          Vi hjälper er skapa en tryggare och säkrare byggarbetsplats
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-white/90 max-w-2xl"
        >
          JK Utbildning stärker säkerhetskulturen i byggbranschen genom engagerande och praktiska utbildningar som verkligen gör skillnad. Om ett arbete inte kan utföras säkert – ska det inte utföras alls.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-2"
        >
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6b2fbf] to-[#8c3bff] px-6 py-3 font-medium text-white shadow-lg shadow-purple-800/30 transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Boka utbildning
            <span className="relative ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`pointer-events-none absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-t ${primary} blur-3xl opacity-30`}
      />
    </section>
  );
}
