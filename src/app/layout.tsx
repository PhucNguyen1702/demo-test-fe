import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/app/font";

export const metadata: Metadata = {
  title: "Test Fe",
  description: "Test Demo Fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
