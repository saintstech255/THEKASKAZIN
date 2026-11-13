import type { Metadata, Viewport } from "next";
import "./globals.css";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Dock from "@/components/Dock";

export const metadata: Metadata = {
  title: { default: "Kas-Kazini Inc. | Websites, Apps & Future Tech", template: "%s | Kas-Kazini Inc." },
  description: "Tanzanian tech enterprise building modern websites, mobile apps, AI systems and humanoid robotics research.",
  metadataBase: new URL("https://kas-kazini.vercel.app"),
  openGraph: { title: "Kas-Kazini Inc.", description: "Websites, mobile apps & future technology from Tanzania.", type: "website" },
};
export const viewport: Viewport = { themeColor: "#050814" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Nav />
        {children}
        <Dock />
      </body>
    </html>
  );
}
