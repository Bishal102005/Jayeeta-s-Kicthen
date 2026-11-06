import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jayeeta's Kitchen | Artisanal Culinary Experience in Barasat",
  description:
    "Savor pure homestyle South Indian Crispy Dosas, Steamed Idlis, Tangy Chaat, Hand-Churned Lassi, and Mojitos. Crafted fresh on cast-iron in Barasat, Kolkata.",
  keywords: [
    "Jayeeta's Kitchen",
    "Barasat Dosa",
    "South Indian Food Barasat",
    "Homestyle Kitchen Kolkata",
    "Butter Masala Dosa",
    "Chowdhurypara Road Restaurant",
    "Fresh Idli Kolkata",
    "Artisanal Lassi",
  ],
  openGraph: {
    title: "Jayeeta's Kitchen - Like Homecooked Goodness",
    description:
      "Crafted on hot cast-iron griddles with pure ghee, heritage spices, and slow-steeped chutneys in Barasat, Kolkata.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#0B0B0B] text-[#F5F1EA] font-sans antialiased selection:bg-[#E4572E] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
