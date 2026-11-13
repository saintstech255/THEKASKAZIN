"use client";
import { motion } from "framer-motion";

// template.tsx re-mounts on every navigation, giving each route a morph-in transition.
// (App Router cannot natively play exit animations; the persistent nav pill / dock use layoutId instead.)
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main initial={{ opacity: 0, y: 24, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-6xl px-4 pb-40 pt-32">
      {children}
    </motion.main>
  );
}
