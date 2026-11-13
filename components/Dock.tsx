"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

const items = [
  { href: `tel:${CONTACT.tel}`, icon: Phone, label: "Call 0741643130", color: "#00F0FF" },
  { href: `https://wa.me/${CONTACT.wa}`, icon: MessageCircle, label: "WhatsApp", color: "#25D366" },
  { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email us", color: "#FF6B00" },
];

export default function Dock() {
  return (
    <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, type: "spring" }}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center pointer-events-none">
      <div className="glass pointer-events-auto flex items-center gap-2 !rounded-full p-2">
        {items.map(({ href, icon: Icon, label, color }) => (
          <motion.a key={label} href={href} aria-label={label} title={label}
            target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
            whileHover={{ scale: 1.25, y: -6 }} whileTap={{ scale: 0.92 }}
            className="grid h-12 w-12 place-items-center rounded-full bg-white/5 hover:bg-white/10">
            <Icon className="h-5 w-5" style={{ color }} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
