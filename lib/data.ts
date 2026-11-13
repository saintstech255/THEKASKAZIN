export const CONTACT = {
  phone: "0741643130",
  tel: "+255741643130",
  wa: "255741643130",
  email: "thekaskazini@gmail.com",
};

export const PLANS = [
  { id: "starter", name: "Starter", price: "TZS 350,000", tag: "Launch fast",
    features: ["Up to 5-page responsive website", "Mobile-first design", "WhatsApp booking button", "Basic SEO + 1 month support"] },
  { id: "business-pro", name: "Business Pro", price: "TZS 800,000", tag: "Most popular",
    features: ["Up to 12 pages + CMS", "Custom animations & branding", "Analytics + advanced SEO", "3 months support"] },
  { id: "premium-ecommerce", name: "Premium E-Commerce", price: "TZS 1.5M+", tag: "Scale up",
    features: ["Full online store", "M-Pesa / Tigo Pesa / card checkout", "Admin dashboard & inventory", "6 months priority support"] },
] as const;

export const SOLUTIONS = [
  { id: "web", icon: "Globe", title: "Web Development",
    blurb: "High-performance sites and web apps built on Next.js, deployed on the edge.",
    points: ["Corporate & e-commerce websites", "Progressive web apps", "Headless CMS integrations", "Core Web Vitals-tuned delivery"] },
  { id: "mobile", icon: "Smartphone", title: "Mobile Engineering",
    blurb: "Native-quality Android and cross-platform apps designed for local realities.",
    points: ["Offline-first architecture", "Mobile money integrations", "Swahili + English interfaces", "Play Store launch support"] },
  { id: "ai", icon: "BrainCircuit", title: "Custom AI & Enterprise Systems",
    blurb: "Internal tools, automation and AI features that fit how your business actually runs.",
    points: ["Inventory, POS & bookkeeping systems", "AI assistants & document automation", "Dashboards and reporting", "API and legacy system integration"] },
];
