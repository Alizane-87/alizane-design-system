import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const displaySerif = Instrument_Serif({
  variable: "--font-display-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alizane Design System & Studio | 79 Master Components",
  description:
    "Official Alizane Labs Design Architecture Suite featuring 20 Heros, 20 Backgrounds, 18 Storytelling Devices, 21 Motion Effects, and 40 Premium Typefaces.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,600,700&f[]=cabinet-grotesk@400,700,800,900&f[]=satoshi@400,500,700,900&f[]=general-sans@400,500,600,700&f[]=chillax@400,500,600,700&f[]=sentient@300,400,500,700&f[]=panchang@400,600,700,800&f[]=switzer@400,500,600,700,800&f[]=ranade@400,500,600,700&f[]=zodiak@400,600,700,800&f[]=telma@400,500,700&f[]=tanker@400&f[]=array@400,600,700&f[]=stardom@400,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400..900;1,400..900&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Castoro+Titling&family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&family=Epilogue:ital,wght@0,400..900;1,400..900&family=Fragment+Mono:ital@0;1&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Instrument+Serif:ital@0;1&family=Italiana&family=JetBrains+Mono:ital,wght@0,400;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400..800;1,6..72,400..800&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400&family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Prata&family=Red+Hat+Mono:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@400;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&family=Syne+Mono&family=Unbounded:wght@400;600;800;900&family=Urbanist:ital,wght@0,400..900;1,400..900&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#0A0D10] text-[#F4F2EF] antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
