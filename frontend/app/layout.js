import { Geist, Geist_Mono, Inter, Bitter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Uttara Adhunik Medical College",
  description: "Explore Uttara Adhunik Medical College, its facilities, admission information, notices, and contact details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bitter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}