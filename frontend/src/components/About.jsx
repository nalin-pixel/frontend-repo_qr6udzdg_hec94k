import React from 'react';
import { motion } from 'framer-motion';
import { Shield, HardHat, Users } from 'lucide-react';

const Card = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay }}
    className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow"
  >
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-700">
      <Icon size={20} />
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{children}</p>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="relative bg-[#f5f5f5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-slate-900"
          style={{ fontFamily: 'Poppins, Montserrat, system-ui' }}
        >
          Om oss
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-700"
        >
          Vi på JK Utbildning arbetar för att skapa en säkrare arbetsmiljö inom byggbranschen. Genom våra utbildningar får varje deltagare en djupare förståelse för riskerna i arbetet och vikten av att ta sitt ansvar för en trygg arbetsplats. Vi erbjuder utbildningar på svenska, engelska och polska, anpassade efter kundens behov.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card icon={Users} title="Instruktörer" delay={0}>
            Erfaren utbildare med fokus på säkerhetskultur och arbetsmiljö.
          </Card>
          <Card icon={HardHat} title="Byggsäkerhet" delay={0.1}>
            Specialistkompetens inom fallskydd, lyft och praktiska moment i fält.
          </Card>
          <Card icon={Shield} title="Säkerhetskultur" delay={0.2}>
            Tydligt fokus på ansvar, riskmedvetenhet och rutiner som håller.
          </Card>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[{
            name: 'Therese Janerup Kolstad',
            email: 'therese@jk-utbildning.se',
            bio: 'Erfaren utbildare med fokus på säkerhetskultur och arbetsmiljö.'
          }, {
            name: 'Martin Wistarnd',
            email: 'martin@jk-utbildning.se',
            bio: 'Specialist på byggsäkerhet, fallskydd och lyftutbildningar.'
          }, {
            name: 'Marko Bogdanski',
            email: null,
            bio: 'Expert på asbest, sanering och praktiska utbildningar i fält.'
          }].map((i, idx) => (
            <motion.div
              key={i.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{i.name}</h3>
              </div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{i.bio}</p>
              {i.email && (
                <a href={`mailto:${i.email}`} className="mt-3 inline-block text-sm text-purple-700 hover:underline">
                  {i.email}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
