"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const metrics = [
  { value: 120, prefix: "+", suffix: "", label: "Zrealizowanych projektów" },
  { value: 340, prefix: "", suffix: "%", label: "Średni wzrost konwersji klientów" },
  { value: 14, prefix: "", suffix: " dni", label: "Do pierwszego raportu" },
  { value: 8, prefix: "", suffix: " lat", label: "Doświadczenia" },
];

function Counter({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tight)" }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 -mt-16 z-10">
      <div className="mx-auto max-w-6xl">
        <GlassCard variant="signal" shimmer className="p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Counter target={m.value} prefix={m.prefix} suffix={m.suffix} />
                <p className="mt-2 text-sm text-text-secondary">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
