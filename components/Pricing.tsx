"use client";
import { useState } from "react";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS } from "@/lib/data";

export default function Pricing() {
  const [sel, setSel] = useState<string>("business-pro");
  return (
    <LayoutGroup>
      <div className="grid gap-5 md:grid-cols-3">
        {PLANS.map((p) => {
          const active = sel === p.id;
          return (
            <motion.div key={p.id} onClick={() => setSel(p.id)} whileHover={{ y: -6 }}
              className="glass relative cursor-pointer p-7">
              {active && (
                <motion.div layoutId="plan-glow" className="absolute inset-0 rounded-3xl border-2 border-cyan-glow shadow-[0_0_40px_rgba(0,240,255,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }} />
              )}
              <div className="relative">
                <span className="rounded-full bg-sunset/20 px-3 py-1 text-xs font-semibold text-sunset">{p.tag}</span>
                <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-3xl font-extrabold text-gradient">{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-glow" />{f}</li>
                  ))}
                </ul>
                <Link href={`/contact?plan=${p.id}`} className={`${active ? "btn-glow" : "btn-ghost"} mt-6 w-full justify-center`}>
                  Choose {p.name}
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
