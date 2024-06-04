import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navBar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
   <html lang="en">
      <body className={inter.className}> 
      <NavBar />
        {children}
        <Footer/>
        </body>
      
    </html>
    </>
  );
}
