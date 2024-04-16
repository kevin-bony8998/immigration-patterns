"use client";

import React, { useState, useEffect, useRef } from "react";

import Globe from "react-globe.gl";

export const World = (labelsValues: any) => {
  const d3 = require('d3');
  const places = labelsValues?.labelsValues;

  const weightColor = d3.scaleLinear()
      .domain([0, 30])
      .range(['lightblue', 'darkred'])
      .clamp(true);

  const colorReturner = (yearValue: string) => {
    if (yearValue === '2018') {
      return 'rgb(213, 184, 255)'
    }
    else if (yearValue === '2019') {
      return 'rgb(134, 226, 213)'
    }
    else {
      return 'rgb(227, 61, 148)'
    }
  }

  return <Globe
  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
  backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

  hexBinPointsData={places?.features}
  hexBinPointLat={(d: any) => d.geometry.coordinates[1]}
  hexBinPointLng={(d: any) => d.geometry.coordinates[0]}
  hexBinPointWeight={(d: any) => d.properties.tourists  * 0.00025}
  hexAltitude={({ sumWeight }) => sumWeight * 0.000025}
  hexTopColor={() => colorReturner(places.yearValue)}
  hexSideColor={() => colorReturner(places.yearValue)}
  hexLabel={(d: any) => `
    Number of Tourists in the year <b>${places.yearValue}</b><ul>
      <li>
        ${d.points?.[0]?.properties.region}
      </li>
      <li>
        ${d.points?.[0]?.properties.tourists / 1000000} million
      </li>
    </ul>
  `}
  />;
};
