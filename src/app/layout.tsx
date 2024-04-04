"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { World } from "./World";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const World = dynamic(
    () => import('./World').then((module) => module.World),
    {
      ssr: false
    }
  );
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <html lang="en">
      <body className={'main-body-class ' + inter.className}>{children}</body>
      {domLoaded && (
        <World />
      )}
    </html>
  );
}
