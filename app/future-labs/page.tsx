import type { Metadata } from "next";
import { Bot, Cog, Brain } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Future Labs" };

const phases = [
  { p: "Phase 1", t: "Foundations", d: "Actuator research, sensor fusion and mechanical prototyping." },
  { p: "Phase 2", t: "Embodied Intelligence", d: "On-device AI for balance, perception and speech in Swahili & English." },
  { p: "Phase 3", t: "K-01 Prototype", d: "First walking humanoid platform for education and service use cases." },
];

export default function FutureLabs() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-widest text-sunset">R&amp;D · Vision</p>
      <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Future <span className="text-gradient">Labs</span></h1>
      <p className="mt-4 max-w-2xl text-white/70">Long-horizon research in mechatronics and robotics, built in Tanzania.</p>

      <Reveal className="mt-10">
        <div className="glass relative overflow-hidden p-10">
          <Bot className="absolute -right-6 -top-6 h-52 w-52 text-cyan-glow/10" />
          <h2 className="text-3xl font-bold">Project K-01</h2>
          <p className="mt-3 max-w-xl text-white/75">Our flagship humanoid robotics initiative — a long-term effort to design, build and iterate a locally-engineered humanoid platform.</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {phases.map((x, n) => (
          <Reveal key={x.p} delay={n * 0.1}>
            <div className="glass glass-hover h-full p-7">
              <span className="text-xs font-semibold text-cyan-glow">{x.p}</span>
              <h3 className="mt-2 text-xl font-bold">{x.t}</h3>
              <p className="mt-2 text-sm text-white/70">{x.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal><div className="glass p-7"><Cog className="h-7 w-7 text-sunset" /><h3 className="mt-3 text-xl font-bold">Mechatronics</h3><p className="mt-2 text-sm text-white/70">Integrating mechanical, electronic and software systems into reliable machines.</p></div></Reveal>
        <Reveal delay={0.1}><div className="glass p-7"><Brain className="h-7 w-7 text-cyan-glow" /><h3 className="mt-3 text-xl font-bold">Applied AI Research</h3><p className="mt-2 text-sm text-white/70">Perception, planning and language models adapted to local needs.</p></div></Reveal>
      </div>
    </>
  );
}
