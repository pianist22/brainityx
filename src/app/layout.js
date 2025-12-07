// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://brainityxresearchtech.in"),
  title: {
    default: "BRAINITYX RESEARCHTECH",
    template: "%s | BRAINITYX RESEARCHTECH",
  },
  description: "Academic Conference Management, Research Publication Support, Corporate Events, and Training Programs.",
  openGraph: {
    type: "website",
    siteName: "BRAINITYX RESEARCHTECH",
    url: "https://brainityxresearchtech.in",
  },
  alternates: {
    canonical: "https://brainityxresearchtech.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster 
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: 'white',
              color: 'black',
              border: '1px solid #e5e7eb',
            },
            className: 'sonner-toast',
          }}
        />
      </body>
    </html>
  );
}
