import React from 'react';

export default function Modal({ planet, onClose }) {
  if (!planet) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-2">{planet.name}</h2>
        <p className="mb-4">{planet.description}</p>
        <div className="text-sm space-y-1">
          <p><strong>Size:</strong> {planet.size}</p>
          <p><strong>Distance:</strong> {planet.distance}</p>
          <p><strong>Orbit Speed:</strong> {planet.orbitSpeed}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
