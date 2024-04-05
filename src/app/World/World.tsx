"use client";

import React, { useState, useEffect, useRef } from "react";

import Globe from "react-globe.gl";

export const World = (labelsValues: any) => {
  const places = labelsValues?.labelsValues?.features;
  return <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

    labelsData={places}
    labelLat={(d: any) => d.properties.latitude}
    labelLng={(d: any) => d.properties.longitude}
    labelText={(d: any) => d.properties.name}
    labelSize={(d: any) => Math.sqrt(d.properties.pop_max) * 4e-4}
    labelDotRadius={(d: any) => Math.sqrt(d.properties.pop_max) * 4e-4}
    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
    labelResolution={2}
    labelsTransitionDuration={3000}
  />;
};
