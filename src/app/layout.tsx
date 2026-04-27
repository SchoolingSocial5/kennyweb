import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT Company | Premium IT Solutions",
  description: "Where Creativity Meets Cutting-Edge Technology",
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

