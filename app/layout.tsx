import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Navbar } from "@/features";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const zalando = localFont({
  src: [
    {
      path: "../public/fonts/zalando/ZalandoSansSemiExpanded-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-zalando",
});

const jakarta = localFont({
  src: [
    {
      path: "../public/fonts/jakarta/PlusJakartaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
});


export const metadata: Metadata = {
  title: "Paenote - Global Payment for Global Businesses",
  description: "Top Fintech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable}  ${zalando.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
