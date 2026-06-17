"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    initials: "MK",
    name: "Marek Kowalski",
    role: "CEO",
    company: "TechStart Sp. z o.o.",
    rating: 5,
    text: "Współpraca z 360 Connect to był punkt zwrotny. W 6 miesięcy nasz ruch organiczny wzrósł o 280%, a koszty pozyskania leada spadły o połowę.",
  },
  {
    initials: "AN",
    name: "Anna Nowak",
    role: "Marketing Director",
    company: "FashionHub",
    rating: 5,
    text: "Profesjonalizm i transparentność na najwyższym poziomie. Raporty są czytelne, wyniki mówią same za siebie. ROAS na Meta Ads wzrósł 4x.",
  },
  {
    initials: "PW",
    name: "Piotr Wiśniewski",
    role: "Founder",
    company: "EcoStore.pl",
    rating: 5,
    text: "Szukaliśmy agencji, która rozumie e-commerce. 360 Connect nie tylko spełniło nasze oczekiwania, ale je przekroczyło. Polecam każdemu.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>Opinie</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4">Co mówią nasi klienci</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 min-w-[300px] md:min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
