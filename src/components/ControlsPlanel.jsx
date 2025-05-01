import React from 'react';

export default function ControlsPanel({ timeSpeed, setTimeSpeed }) {
  return (
    <div className="absolute bottom-4 left-4 bg-white/10 p-4 rounded-lg backdrop-blur text-sm">
      <label className="block mb-1 font-semibold">Time Speed</label>
      <input
        type="range"
        min="0.1"
        max="2"
        step="0.05"
        value={timeSpeed}
        onChange={(e) => setTimeSpeed(parseFloat(e.target.value))}
        className="w-40"
      />
      <p className="mt-1">x{timeSpeed.toFixed(2)}</p>
    </div>
  );
}
