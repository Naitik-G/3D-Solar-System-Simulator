import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import OrbitLine from './OrbitLine';

export default function Moon({ moon }) {
  const moonRef = useRef();

  useFrame(({ clock }) => {
    const angle = (clock.getElapsedTime() * moon.speed) % (2 * Math.PI);
    const x = moon.distance * Math.cos(angle);
    const z = moon.distance * Math.sin(angle);
    if (moonRef.current) {
      moonRef.current.position.set(x, 0, z);
    }
  });

  return (
    <>
      <OrbitLine radius={moon.distance} />
      <mesh ref={moonRef}>
        <sphereGeometry args={[moon.size, 16, 16]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  );
}