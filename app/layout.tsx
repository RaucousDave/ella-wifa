import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const beVietnamPro = localFont({
  src: [
    { path: "./fonts/BeVietnamPro-Thin.otf", weight: "100", style: "normal" },
    {
      path: "./fonts/BeVietnamPro-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    { path: "./fonts/BeVietnamPro-Light.otf", weight: "300", style: "normal" },
    {
      path: "./fonts/BeVietnamPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/BeVietnamPro-Medium.otf", weight: "500", style: "normal" },
    {
      path: "./fonts/BeVietnamPro-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    { path: "./fonts/BeVietnamPro-Bold.otf", weight: "700", style: "normal" },
    {
      path: "./fonts/BeVietnamPro-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    { path: "./fonts/BeVietnamPro-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
});

const ppHatton = localFont({
  src: [
    {
      path: "./fonts/PPHatton-Ultralight.woff2",
      weight: "100",
      style: "normal",
    },
    { path: "./fonts/PPHatton-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/PPHatton-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
});

export const metadata = {
  title: "Ella Wifa | Graphic Design Portfolio",
  description:
    "A showcase of Ella Wifa’s clean, thoughtful, and expressive graphic design work where simplicity meets impact.",
  openGraph: {
    title: "Ella Wifa | Graphic Design Portfolio",
    description:
      "A showcase of Ella Wifa’s clean, thoughtful, and expressive graphic design work where simplicity meets impact.",
    url: "https://your-site-url.com",
    siteName: "Ella Wifa Portfolio",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Ella Wifa Graphic Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ella Wifa | Graphic Design Portfolio",
    description:
      "A showcase of Ella Wifa’s clean, thoughtful, and expressive graphic design work where simplicity meets impact.",
    images: ["/og-image.JPG"],
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
        className={`${beVietnamPro.variable} ${ppHatton.variable} bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
