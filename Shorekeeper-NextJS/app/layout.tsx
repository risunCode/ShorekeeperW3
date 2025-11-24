import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shorekeeper - Wuthering Waves",
  description: "Discover the mysterious Shorekeeper from Wuthering Waves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
