import * as THREE from 'three';

export default function Ring({ innerRadius, outerRadius, color, tilt }) {
  return (
    <mesh rotation={[tilt, 0, 0]}>
      <ringGeometry args={[innerRadius, outerRadius, 32]} />
      <meshStandardMaterial 
        color={color} 
        side={THREE.DoubleSide} 
        transparent 
        opacity={0.6} 
      />
    </mesh>
  );
}