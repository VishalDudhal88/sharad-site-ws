import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharad Kant — Branding & Product Designer",
  description:
    "Portfolio of Sharad Kant, a Branding & Product Designer specialising in brand identity, product design, and GTM strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-inter h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {children}
      </body>
    </html>
  );
}
