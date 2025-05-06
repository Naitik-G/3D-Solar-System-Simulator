import React, { forwardRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Moon from './Moon';
import OrbitLine from './OrbitLine';
import Ring from './Ring';
import Tooltip from './Tooltip';

const Planet = forwardRef(({ planet, onClick }, ref) => {
  const texture = useLoader(THREE.TextureLoader, planet.texture);

  return (
    <group ref={ref} onClick={() => onClick(planet)}>
      {/* Planet Mesh */}
      <mesh>
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial map={texture} />
        <Tooltip label={planet.name} />
      </mesh>

      {/* Ring (if exists) */}
      {planet.ring && (
        <Ring
          innerRadius={planet.ring.innerRadius}
          outerRadius={planet.ring.outerRadius}
          color={planet.ring.color}
          tilt={planet.ring.tilt}
        />
      )}

      {/* Moons and their Orbit Lines */}
      {planet.moons?.map((moon) => (
        <group key={moon.name}>
          <OrbitLine radius={moon.distance} />
          <Moon moon={moon} />
        </group>
      ))}
    </group>
  );
});

export default Planet;
