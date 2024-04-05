"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { useGlobalDataStore } from "../stores/globalDataStore";
import { returnDataToBeUsed } from "../helperUtils/helper";

export default function WorldWrapperComp() {
  const World = dynamic(
    () => import('./World').then((module) => module.World),
    {
      ssr: false
    }
  );
  const [domLoaded, setDomLoaded] = useState(false);
  const selectedTabIdx = useGlobalDataStore((state: any) => state.selectedTabIdx)
  const labelValues = returnDataToBeUsed(selectedTabIdx);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="world-container">
        {domLoaded && (
          <>
            <World labelsValues={labelValues}/>
          </>
        )}
    </div>
  );
}
