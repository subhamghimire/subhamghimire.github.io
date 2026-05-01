import type { Metadata } from 'next';
import './globals.css';
import { siteMetadata } from '@/lib/data';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: [{ name: siteMetadata.author }],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0c1117] text-slate-50 antialiased selection:bg-slate-300/30 selection:text-slate-50">
        {children}
      </body>
    </html>
  );
}
