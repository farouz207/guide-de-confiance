import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaincre la peur de parler en public | Le Guide de Confiance",
  description: "Découvrez la méthode confidentielle pour vaincre le trac et maîtriser l'art de la prise de parole en public. Le protocole exact pour captiver votre auditoire et prendre confiance en vous.",
  alternates: {
    canonical: "https://guide-de-confiance.vercel.app/",
  },
  openGraph: {
    title: "Vaincre la peur de parler en public | Le Guide de Confiance",
    description: "Découvrez la méthode confidentielle pour vaincre le trac et maîtriser la prise de parole en public.",
    url: "https://guide-de-confiance.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://guide-de-confiance.vercel.app/screen.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaincre la peur de parler en public | Le Guide de Confiance",
    description: "Découvrez la méthode confidentielle pour vaincre le trac et maîtriser la prise de parole en public.",
    images: ["https://guide-de-confiance.vercel.app/screen.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased min-h-screen selection:bg-accent selection:text-black flex flex-col relative">
        {children}
      </body>
    </html>
  );
}
