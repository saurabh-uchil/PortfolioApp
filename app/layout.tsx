
import "./globals.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
