"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Smartphone, Bot } from "lucide-react";

const cores = [
  { id: "web", label: "Web Core", icon: Globe, color: "#00F0FF", radius: "50%", text: "Lightning-fast Next.js platforms that convert visitors into customers." },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone, color: "#4F7BFF", radius: "28%", text: "Offline-first Android & cross-platform apps with mobile-money payments." },
  { id: "robotics", label: "Robotics R&D", icon: Bot, color: "#FF6B00", radius: "12%", text: "Mechatronics and humanoid research — Project K-01 is just the beginning." },
];

export default function MorphCore() {
  const [i, setI] = useState(0);
  const core = cores[i];
  const Icon = core.icon;
  return (
    <div className="glass mx-auto w-full max-w-md p-6">
      <div className="relative mx-auto grid h-56 place-items-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute h-52 w-52 rounded-full border border-dashed border-white/20" />
        <motion.div animate={{ borderRadius: core.radius, backgroundColor: core.color + "22", borderColor: core.color, boxShadow: `0 0 60px ${core.color}66` }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
          className="grid h-36 w-36 place-items-center border-2">
          <AnimatePresence mode="wait">
            <motion.div key={core.id} initial={{ scale: 0.4, rotate: -90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.4, rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
              <Icon className="h-14 w-14" style={{ color: core.color }} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <motion.p key={core.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          className="min-h-[3.5rem] text-center text-sm text-white/70">{core.text}</motion.p>
      </AnimatePresence>
      <div className="mt-4 flex justify-center gap-1 rounded-full bg-white/5 p-1">
        {cores.map((c, idx) => (
          <button key={c.id} onClick={() => setI(idx)} className="relative rounded-full px-3 py-2 text-xs font-medium">
            {idx === i && <motion.span layoutId="core-tab" className="absolute inset-0 rounded-full bg-white/15" />}
            <span className="relative">{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
