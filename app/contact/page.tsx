import { Suspense } from "react";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <h1 className="text-4xl font-extrabold sm:text-5xl">Request a <span className="text-gradient">Quote</span></h1>
      <p className="mt-4 max-w-xl text-white/70">Tell us about your project — we reply via WhatsApp or email.</p>
      <Suspense fallback={null}><ContactForm /></Suspense>
    </>
  );
}
