import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Tooltip from './Tooltip';
import Moon from './Moon';

  
const Planet = forwardRef(({ planet, onClick }, ref) => {
  const moonRefs = useRef([]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    planet.moons?.forEach((moon, i) => {
      const angle = elapsed * moon.speed;
      const x = moon.distance * Math.cos(angle);
      const z = moon.distance * Math.sin(angle);

      if (moonRefs.current[i]) {
        moonRefs.current[i].position.set(x, 0, z);
      }
    });
  });

  return (
    <group ref={ref} onClick={() => onClick(planet)}>
      {/* Planet Mesh */}
      <mesh>
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial color={planet.color} />
        <Tooltip label={planet.name} />
      </mesh>

      {/* Moons */}
      {planet.moons?.map((moon) => (
        <Moon key={moon.name} moon={moon} />
      ))}
    </group>

  );
});

export default Planet;
