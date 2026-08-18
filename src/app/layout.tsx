import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onepager",
  description:
    "We design and develop awesome websites and smart applications, impactful identities using the latest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
