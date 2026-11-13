import type { Metadata } from "next";
import { Globe, Smartphone, BrainCircuit, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SOLUTIONS } from "@/lib/data";

export const metadata: Metadata = { title: "Solutions" };
const icons = { Globe, Smartphone, BrainCircuit };

export default function Solutions() {
  return (
    <>
      <h1 className="text-4xl font-extrabold sm:text-5xl">Our <span className="text-gradient">Solutions</span></h1>
      <p className="mt-4 max-w-2xl text-white/70">End-to-end digital engineering — from first sketch to production.</p>
      <div className="mt-12 space-y-6">
        {SOLUTIONS.map((s, n) => {
          const Icon = icons[s.icon as keyof typeof icons];
          return (
            <Reveal key={s.id} delay={n * 0.05}>
              <article className="glass grid gap-6 p-8 md:grid-cols-[auto_1fr_1fr] md:items-center">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-cyan-glow/10"><Icon className="h-8 w-8 text-cyan-glow" /></div>
                <div>
                  <h2 className="text-2xl font-bold">{s.title}</h2>
                  <p className="mt-2 text-white/70">{s.blurb}</p>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  {s.points.map((p) => <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-sunset" />{p}</li>)}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
