import React from 'react';
import { useFrame } from '@react-three/fiber';
import Planet from '../components/Planet';
import OrbitLine from '../components/OrbitLine';
import planetsData from '../constants/planets';

export default function SolarSystem({ onPlanetClick, timeSpeed }) {
  const planetRefs = React.useRef(planetsData.map(() => React.createRef()));

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    planetsData.forEach((planet, i) => {
      const angle = elapsed * planet.orbitSpeed * timeSpeed;
      const x = planet.distance * Math.cos(angle);
      const z = planet.distance * Math.sin(angle);

      if (planetRefs.current[i].current) {
        planetRefs.current[i].current.position.set(x, 0, z);
      }
    });
  });

  return (
    <>
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

      {/* Planets and their Orbit Lines */}
      {planetsData.map((planet, i) => (
        <group key={planet.name}>
          <OrbitLine radius={planet.distance} />
          <Planet
            ref={planetRefs.current[i]}
            planet={planet}
            onClick={onPlanetClick}
          />
        </group>
      ))}
    </>
  );
}