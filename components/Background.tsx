"use client";
import { motion } from "framer-motion";

const orbs = [
  { c: "#00F0FF", s: "h-[34rem] w-[34rem]", p: "-top-40 -left-40", x: [0, 120, 0], y: [0, 80, 0], d: 22 },
  { c: "#1D3FBF", s: "h-[40rem] w-[40rem]", p: "top-1/3 -right-52", x: [0, -100, 0], y: [0, 120, 0], d: 28 },
  { c: "#FF6B00", s: "h-[28rem] w-[28rem]", p: "-bottom-40 left-1/4", x: [0, 90, 0], y: [0, -90, 0], d: 25 },
];

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] opacity-25 ${o.s} ${o.p}`}
          style={{ background: o.c }}
          animate={{ x: o.x, y: o.y, scale: [1, 1.15, 1] }}
          transition={{ duration: o.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
        <defs><pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#fff" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>
    </div>
  );
}
