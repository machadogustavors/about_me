import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Machado - Full-Stack Developer | Portfolio",
  description: "Portfolio de Gustavo Machado - Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript, Node.js e AWS. Criando aplicações web rápidas, escaláveis e de alta qualidade.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "AWS", "Web Development", "Desenvolvedor", "Portfolio"],
  authors: [{ name: "Gustavo Machado" }],
  creator: "Gustavo Machado",
  publisher: "Gustavo Machado",
  metadataBase: new URL('https://portfolio-gustavo-omega.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gustavo Machado - Full-Stack Developer",
    description: "Portfolio de Gustavo Machado - Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript, Node.js e AWS",
    type: "website",
    locale: "pt_BR",
    url: 'https://portfolio-gustavo-omega.vercel.app',
    siteName: "Gustavo Machado Portfolio",
    images: [
      {
        url: 'https://portfolio-gustavo-omega.vercel.app/og-image.svg',
        alt: 'Gustavo Machado - Portfolio',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Machado - Full-Stack Developer",
    description: "Portfolio de Gustavo Machado - Desenvolvedor Full-Stack",
    images: ['https://portfolio-gustavo-omega.vercel.app/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = 'https://portfolio-gustavo-omega.vercel.app';
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Gustavo Machado Portfolio",
        "description": metadata.description,
        "publisher": { "@id": `${siteUrl}/#person` }
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Gustavo Machado",
        "jobTitle": "Full-Stack Developer",
        "url": siteUrl,
        "sameAs": [siteUrl]
      }
    ]
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
