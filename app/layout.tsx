import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohnish Gorana Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000] text-white relative`}
      >
        <div className="flex flex-col gap-y-2 items-center border border-black mx-auto py-2 sm:py-3 lg:py-4 justify-between">
          <nav className="w-[98vw] md:w-[95vw]">
            <Navbar />
          </nav>

          <main className="w-full">{children}</main>

          <footer className="w-full mt-8 self-end"><Footer /></footer>

        </div>
      </body>
    </html>
  );
}
