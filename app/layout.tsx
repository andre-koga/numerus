import type { Metadata } from "next";
import "./globals.css";
import { space } from "@/app/lib/fonts";
import Header from "@/app/ui/header/Header";
import Footer from "@/app/ui/footer/Footer";
import Navbar from "@/app/ui/navbar/Navbar";

export const metadata: Metadata = {
  title: "Numerus",
  description: "A next-gen calculator for the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space.className} relative bg-dark text-light`}>
        <div className="fixed bottom-0 z-50 h-20 w-full overflow-hidden bg-darky sm:left-0 sm:h-full sm:w-28">
          <Navbar />
        </div>
        <div className="mb-44 sm:mb-28 sm:ml-28">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
