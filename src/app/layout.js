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

export const metadata = {
  title: "AI KGenesis - AI Image Generator",
  description:
    "Create, save, and share stunning AI-generated images instantly. No login required – simple, fast, and creative.",
  openGraph: {
    title: "AI KGenesis - AI Image Generator",
    description:
      "Create, save, and share stunning AI-generated images instantly. No login required – simple, fast, and creative.",
    url: "https://ai-k-genesis.vercel.app",
    siteName: "AI KGenesis",
    images: [
      {
        url: "https://ai-k-genesis.vercel.app/og-image.png", // ⚡ add an OG image in /public
        width: 1200,
        height: 630,
        alt: "AI KGenesis - Generate Stunning AI Images",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI KGenesis - AI Image Generator",
    description:
      "Generate, save, and share AI-powered images with ease. No login required.",
    images: ["https://ai-k-genesis.vercel.app/og-image.png"], // ⚡ same OG image
  },
};
export default function RootLayout({ children }) {
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
