import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "First Baptist Church of Warren, MI",
  description:
    "An Independent Fundamental Baptist Church located in the Historical District of Warren, Michigan. Come and fellowship with us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://slackwebsitechat.vercel.app/widget/wbc-chat.js"
          data-api="https://slackwebsitechat.vercel.app"
          data-key="wbc_ea31c53336501c9cdf37c02db26f522e3d314b0ad19f35aa"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
