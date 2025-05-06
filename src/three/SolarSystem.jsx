import React from 'react';
import { useFrame } from '@react-three/fiber';
import Planet from '../components/Planet';
import OrbitLine from '../components/OrbitLine';
import planetsData from '../constants/planets';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three'


export default function SolarSystem({ onPlanetClick, timeSpeed }) {
  const planetRefs = React.useRef(planetsData.map(() => React.createRef()));
  const sunTexture = useLoader(THREE.TextureLoader, 'sun.jpg');


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
  <meshStandardMaterial map={sunTexture} emissive={'yellow'} emissiveIntensity={0.8} />
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