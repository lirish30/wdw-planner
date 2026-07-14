import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WDW Planner",
  description: "A calm, family-first Walt Disney World trip planner.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>{children}</body>
    </html>
  );
}
