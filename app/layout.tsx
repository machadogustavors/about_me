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
  metadataBase: new URL('https://seudominio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gustavo Machado - Full-Stack Developer",
    description: "Portfolio de Gustavo Machado - Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript, Node.js e AWS",
    type: "website",
    locale: "pt_BR",
    url: 'https://seudominio.com',
    siteName: "Gustavo Machado Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Machado - Full-Stack Developer",
    description: "Portfolio de Gustavo Machado - Desenvolvedor Full-Stack",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
