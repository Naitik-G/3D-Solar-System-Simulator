import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function usePlanetOrbit(planetsData, timeSpeed) {
  const planetRefs = useRef([]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    planetsData.forEach((planet, i) => {
      const angle = (elapsed * planet.orbitSpeed * timeSpeed) % (2 * Math.PI);
      const x = planet.distance * Math.cos(angle);
      const z = planet.distance * Math.sin(angle);
      if (planetRefs.current[i]) {
        planetRefs.current[i].position.set(x, 0, z);
      }
    });
  });

  return planetRefs;
}
