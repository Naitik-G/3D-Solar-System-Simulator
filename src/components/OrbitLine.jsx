import React from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

export default function OrbitLine({ radius }) {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * 2 * Math.PI;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  return (
    <Line
      points={points}
      color="gray"
      lineWidth={0.5}
      dashed
      dashSize={0.2}
      gapSize={0.2}
    />
  );
}
