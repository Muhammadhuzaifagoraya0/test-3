import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Onepager",
  description:
    "We design and develop awesome websites and smart applications, impactful identities using the latest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
