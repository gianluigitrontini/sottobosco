import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sequelSans = localFont({
  src: [
    { path: "./fonts/SequelSansHeadlineRegular.woff2", weight: "400" },
    { path: "./fonts/SequelSansHeadlineSemi.woff2", weight: "600" },
  ],
  variable: "--font-sequel-sans",
});

const recoleta = localFont({
  src: [{ path: "./fonts/Recoleta-400.woff2", weight: "400" }],
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Sottobosco | Cooperativa Agricola",
  description:
    "Sottobosco ti connette direttamente con piccoli produttori locali, promuovendo un futuro più verde e sano. Sottobosco offre una piattaforma per valorizzare le colture e promuovere la tua azienda. Corsi e laboratori pratici per diffondere la cultura della sostenibilità, dalle scuole alle aziende agricole.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sequelSans.variable} ${recoleta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
