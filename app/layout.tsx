import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono, Roboto_Mono } from "next/font/google";

const space_mono = Roboto_Mono({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  );
}
