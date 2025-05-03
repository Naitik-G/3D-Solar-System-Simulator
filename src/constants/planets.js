const planetsData = [
  {
    name: 'Mercury',
    size: 0.5,
    color: '#b1b1b1',
    distance: 5,
    orbitSpeed: 0.9,
    moons: [] // no moons
  },
  {
    name: 'Venus',
    size: 0.7,
    color: '#e6cc7a',
    distance: 8,
    orbitSpeed: 0.7,
    moons: [] // no moons
  },
  {
    name: 'Earth',
    size: 1,
    color: '#2e7dd1',
    distance: 11,
    orbitSpeed: 0.5,
    moons: [
      { name: 'Moon', size: 0.2, distance: 1.5, speed: 1.5 }
    ]
  },
  {
    name: 'Mars',
    size: 0.8,
    color: '#c1440e',
    distance: 14,
    orbitSpeed: 0.3,
    moons: [
      { name: 'Phobos', size: 0.15, distance: 1.2, speed: 2.5 },
      { name: 'Deimos', size: 0.1, distance: 2.0, speed: 1.2 }
    ]
  }
];

export default planetsData;
