import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

import SolarSystem from './three/SolarSystem';
import Modal from './components/Modal';
import ControlsPanel from './components/ControlsPlanel';

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [timeSpeed, setTimeSpeed] = useState(1); // controls orbit speed multiplier

  return (
    <div className="h-screen w-screen bg-black text-white">
      <Canvas camera={{ position: [0, 20, 40], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <SolarSystem onPlanetClick={setSelectedPlanet} timeSpeed={timeSpeed} />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>

      {/* Title Overlay */}
      <div className="absolute top-4 left-4 bg-white/10 p-4 rounded-lg backdrop-blur text-sm z-20">
        <h1 className="text-xl font-bold">3D Solar System Simulator</h1>
        <p>Click a planet for details. Use mouse to pan, zoom, and rotate.</p>
      </div>

      {/* Modal for Planet Details */}
      <Modal planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />

      {/* Time Control Panel */}
      <ControlsPanel timeSpeed={timeSpeed} setTimeSpeed={setTimeSpeed} />
    </div>
  );
}
