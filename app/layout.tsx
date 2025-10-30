import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.joaokhalaf.dev'),
  title: {
    default: "João Khalaf",
    template: "João Khalaf | %s"
  },
  description: "My personal website",
  keywords: ['Software Engineer', 'Nextjs Developer', 'FullStack Engineer'],
  authors: [{ name: 'João Khalaf' }],
  creator: 'João Khalaf',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.joaokhalaf.dev',
    siteName: 'João Khalaf',
    title: 'João Khalaf',
    description: 'My personal website',
    images: ['https://www.joaokhalaf.dev/opengraph-image.png']
  },
  twitter: {
    card: "summary_large_image",
    title: "João Khalaf",
    description: "My personal website",
    creator: "@kh4lf_",
    images: ["https://www.joaokhalaf.dev/opengraph-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
