"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/future-labs", label: "Future Labs" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav className="glass flex w-full max-w-3xl items-center justify-between !rounded-full px-3 py-2">
        <Link href="/" className="flex items-center gap-2 pl-2 font-bold">
          <Cpu className="h-5 w-5 text-cyan-glow" />
          <span className="hidden sm:inline">Kas-Kazini</span>
        </Link>
        <ul className="flex items-center gap-1">
          {links.map((l) => {
            const active = path === l.href;
            return (
              <li key={l.href} className="relative">
                <Link href={l.href} className={`relative z-10 block rounded-full px-3 py-2 text-xs sm:text-sm transition-colors ${active ? "text-space font-semibold" : "text-white/70 hover:text-white"}`}>
                  {l.label}
                </Link>
                {active && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-cyan-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
