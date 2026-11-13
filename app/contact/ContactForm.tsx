"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { CONTACT, PLANS } from "@/lib/data";

const input = "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-cyan-glow";

export default function ContactForm() {
  const params = useSearchParams();
  const [plan, setPlan] = useState(params.get("plan") ?? "business-pro");
  const [f, setF] = useState({ name: "", phone: "", email: "", message: "" });
  const valid = f.name.trim() && f.phone.trim();
  const planName = PLANS.find((p) => p.id === plan);
  const text = [
    "Hello Kas-Kazini Inc.,", `Name: ${f.name}`, `Phone: ${f.phone}`, f.email && `Email: ${f.email}`,
    `Package: ${planName?.name} (${planName?.price})`, f.message && `Project: ${f.message}`,
  ].filter(Boolean).join("\n");

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="glass space-y-4 p-7">
        <input className={input} placeholder="Full name *" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <div className="grid gap-4 sm:grid-cols-2">
          <input className={input} placeholder="Phone *" inputMode="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
          <input className={input} placeholder="Email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
        </div>
        <textarea className={`${input} min-h-32`} placeholder="Tell us about your project" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
        <div className="flex flex-col gap-3 sm:flex-row">
          <a aria-disabled={!valid} target="_blank" rel="noopener noreferrer" href={valid ? `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(text)}` : undefined}
            className={`btn-glow justify-center ${!valid ? "pointer-events-none opacity-40" : ""}`}><MessageCircle className="h-4 w-4" />Send via WhatsApp</a>
          <a aria-disabled={!valid} href={valid ? `mailto:${CONTACT.email}?subject=${encodeURIComponent("Quote request: " + planName?.name)}&body=${encodeURIComponent(text)}` : undefined}
            className={`btn-ghost justify-center ${!valid ? "pointer-events-none opacity-40" : ""}`}><Mail className="h-4 w-4" />Send via Email</a>
        </div>
      </div>

      <div className="space-y-3">
        {PLANS.map((p) => (
          <button key={p.id} onClick={() => setPlan(p.id)} className="glass relative w-full p-5 text-left">
            {plan === p.id && <motion.span layoutId="plan-glow" className="absolute inset-0 rounded-3xl border-2 border-cyan-glow shadow-[0_0_30px_rgba(0,240,255,0.3)]" />}
            <span className="relative flex items-center justify-between"><b>{p.name}</b><span className="text-cyan-glow">{p.price}</span></span>
          </button>
        ))}
        <p className="px-2 text-sm text-white/55">Prefer to talk? Call <a className="text-cyan-glow" href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a> or email {CONTACT.email}.</p>
      </div>
    </div>
  );
}
