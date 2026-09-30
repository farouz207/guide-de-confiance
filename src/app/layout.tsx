import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y1LDCD5510`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y1LDCD5510');
            `,
          }}
        />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1969381983752388');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1969381983752388&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
