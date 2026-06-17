"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Cpu, Users, Globe } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  { icon: Zap, title: "Szybkie wdrożenia", desc: "Kampanie startują w ciągu dni, nie tygodni. Sprawna realizacja i natychmiastowe efekty." },
  { icon: Shield, title: "Bezpieczeństwo danych", desc: "Pełna zgodność z RODO i najwyższe standardy ochrony danych Twoich klientów." },
  { icon: TrendingUp, title: "Strategia wzrostu", desc: "Indywidualny plan skalowania oparty na danych, nie przeczuciach." },
  { icon: Cpu, title: "Nowoczesne technologie", desc: "Automatyzacja, AI i najnowsze narzędzia analityczne w służbie Twojego biznesu." },
  { icon: Users, title: "Doświadczony zespół", desc: "Certyfikowani specjaliści z wieloletnim doświadczeniem w performance marketingu." },
  { icon: Globe, title: "Globalny zasięg", desc: "Kampanie na rynkach lokalnych i międzynarodowych, w wielu językach." },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SectionLabel>Dlaczego my</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4">
            Przewagi, które wyróżniają
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 group hover:glass-card--accent transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ cursor: "default" }}
              whileHover={{
                borderColor: "var(--border-accent)",
                boxShadow: "0 0 40px var(--accent-glow)",
              }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-accent-primary/10">
                <f.icon size={20} className="text-accent-primary" />
              </div>
              <h3 className="text-h3 text-text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
