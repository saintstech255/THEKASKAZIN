import Link from "next/link";
import { ArrowRight, Globe, Smartphone, BrainCircuit, FlaskConical } from "lucide-react";
import MorphCore from "@/components/MorphCore";
import Pricing from "@/components/Pricing";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="glass inline-block !rounded-full px-4 py-1 text-xs text-cyan-glow">Built in Tanzania · Engineered for the world</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">
            We build the <span className="text-gradient">future</span> of digital Africa.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Kas-Kazini Inc. designs websites, mobile apps and intelligent systems — and researches humanoid robotics for tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-glow">Get a Quote <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/solutions" className="btn-ghost">Explore Solutions</Link>
          </div>
        </div>
        <MorphCore />
      </section>

      <section className="mt-28">
        <Reveal><h2 className="text-3xl font-bold">Core capabilities</h2></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { i: Globe, t: "Web Development", d: "Fast, SEO-ready sites and stores.", c: "md:col-span-2" },
            { i: Smartphone, t: "Mobile Apps", d: "Offline-first Android apps.", c: "" },
            { i: BrainCircuit, t: "AI & Enterprise", d: "Automation tailored to your business.", c: "" },
            { i: FlaskConical, t: "Future Labs", d: "Robotics & mechatronics research.", c: "md:col-span-2" },
          ].map(({ i: Icon, t, d, c }, n) => (
            <Reveal key={t} delay={n * 0.08} className={c}>
              <div className="glass glass-hover h-full p-7">
                <Icon className="h-8 w-8 text-cyan-glow" />
                <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-1 text-white/65">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mt-28">
        <Link href="/future-labs" className="glass glass-hover block overflow-hidden p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-sunset">Future Labs</p>
          <h2 className="mt-2 text-3xl font-bold">Project K-01: Tanzania&apos;s humanoid robotics ambition</h2>
          <p className="mt-3 max-w-2xl text-white/70">Peek inside our long-term research into mechatronics and embodied AI.</p>
          <span className="mt-5 inline-flex items-center gap-2 text-cyan-glow">Enter the lab <ArrowRight className="h-4 w-4" /></span>
        </Link>
      </Reveal>

      <section className="mt-28" id="pricing">
        <Reveal>
          <h2 className="text-3xl font-bold">Transparent pricing</h2>
          <p className="mt-2 text-white/65">Pick a package — we&apos;ll tailor it to your goals.</p>
        </Reveal>
        <div className="mt-8"><Pricing /></div>
      </section>
    </>
  );
}
