"use client";

import "./globals.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { create } from "zustand";

const useGlobalDataStore = create((set) => ({
  selectedTabIdx: 0,
  setSelectedTabIdx: (idx: number) => set({selectedTabIdx: idx}),
}))

export default function RootLayout() {
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={'main-body-class '}>
        {domLoaded && (
          <World />
        )}
      </body>
    </html>
  );
}
