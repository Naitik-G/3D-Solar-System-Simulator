import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import planetsData from '../constants/planets';
import OrbitLine from '../components/OrbitLine';
import usePlanetOrbit from '../hooks/usePlanetOrbit';
import Tooltip from '../components/Tooltip';


export default function SolarSystem({ onPlanetClick, timeSpeed }) {
    const planetRefs = usePlanetOrbit(planetsData, timeSpeed);


  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    planetsData.forEach((planet, index) => {
      const angle = (elapsed * planet.orbitSpeed * timeSpeed) % (2 * Math.PI);
      const x = planet.distance * Math.cos(angle);
      const z = planet.distance * Math.sin(angle);
      if (planetRefs.current[index]) {
        planetRefs.current[index].position.set(x, 0, z);
      }
    });
  });

  return (
    <>
      {/* Sun */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial emissive={'orange'} emissiveIntensity={1.5} />
      </mesh>

      {/* Planets and Orbits */}
      {planetsData.map((planet, i) => (
        <group key={planet.name}>
          {/* Orbit Line */}
          <OrbitLine radius={planet.distance} />

          {/* Planet Mesh */}
          <mesh
            ref={(el) => (planetRefs.current[i] = el)}
            onClick={() => onPlanetClick(planet)}
            cursor="pointer"
          >
            <sphereGeometry args={[planet.size, 32, 32]} />
            <meshStandardMaterial color={planet.color} />
            {/* Tooltip */}
            <Tooltip label={planet.name} />

          </mesh>
        </group>
      ))}
    </>
  );
}
