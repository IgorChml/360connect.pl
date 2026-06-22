"use client";

import { MotionConfig } from "framer-motion";

/**
 * Globalnie respektuje ustawienie systemowe „ogranicz ruch".
 * Przy `reducedMotion="user"` Framer Motion automatycznie wyłącza
 * animacje transform/layout, gdy użytkownik włączył prefers-reduced-motion.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
