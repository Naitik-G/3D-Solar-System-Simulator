import React from 'react';
import { Html } from '@react-three/drei';

export default function Tooltip({ label }) {
  return (
    <Html distanceFactor={10} style={{ pointerEvents: 'none' }}>
      <div className="text-xs text-white bg-black/70 px-2 py-1 rounded shadow">
        {label}
      </div>
    </Html>
  );
}
