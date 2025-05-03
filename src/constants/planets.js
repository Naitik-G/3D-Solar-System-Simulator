const planetsData = [
  {
    name: 'Mercury',
    size: 0.5,
    color: 'gray',
    distance: 3.9,
    orbitSpeed: 0.9,
    moons: []
  },
  {
    name: 'Venus',
    size: 0.7,
    color: 'orange',
    distance: 7.2,
    orbitSpeed: 0.7,
    moons: []
  },
  {
    name: 'Earth',
    size: 1,
    color: 'blue',
    distance: 10.0,
    orbitSpeed: 0.5,
    moons: [
      { name: 'Moon', size: 0.2, distance: 1.5, speed: 1.5 }
    ]
  },
  {
    name: 'Mars',
    size: 0.8,
    color: 'red',
    distance: 15.2,
    orbitSpeed: 0.3,
    moons: [
      { name: 'Phobos', size: 0.15, distance: 1.2, speed: 2.5 },
      { name: 'Deimos', size: 0.1, distance: 2.0, speed: 1.2 }
    ]
  },
  {
    name: 'Jupiter',
    size: 1.5,
    color: 'brown',
    distance: 52.0,
    orbitSpeed: 0.1,
    moons: [
      { name: 'Io', size: 0.3, distance: 2.0, speed: 1.8 },
      { name: 'Europa', size: 0.25, distance: 3.0, speed: 1.4 },
      { name: 'Ganymede', size: 0.35, distance: 4.5, speed: 1.0 },
      { name: 'Callisto', size: 0.3, distance: 6.0, speed: 0.8 }
    ],
    ring: {
      innerRadius: 2.1, // 1.4 * size
      outerRadius: 2.7, // 1.8 * size
      color: 'lightgray',
      tilt: 0.05 // ~3 degrees
    }
  },
  {
    name: 'Saturn',
    size: 1.4,
    color: 'gold',
    distance: 95.8,
    orbitSpeed: 0.08,
    moons: [
      { name: 'Titan', size: 0.4, distance: 3.0, speed: 1.2 },
      { name: 'Rhea', size: 0.25, distance: 4.5, speed: 1.0 },
      { name: 'Enceladus', size: 0.15, distance: 2.0, speed: 1.5 }
    ],
    ring: {
      innerRadius: 1.7, // 1.2 * size
      outerRadius: 3.2, // 2.3 * size
      color: 'beige',
      tilt: 0.47 // ~27 degrees
    }
  },
  {
    name: 'Uranus',
    size: 1.2,
    color: 'cyan',
    distance: 191.8,
    orbitSpeed: 0.05,
    moons: [
      { name: 'Titania', size: 0.25, distance: 3.0, speed: 1.0 },
      { name: 'Oberon', size: 0.25, distance: 4.0, speed: 0.9 },
      { name: 'Ariel', size: 0.2, distance: 2.0, speed: 1.2 }
    ],
    ring: {
      innerRadius: 1.6, // 1.3 * size
      outerRadius: 2.4, // 2.0 * size
      color: 'lightblue',
      tilt: 0.02 // ~1 degree (Uranus’ rings are nearly edge-on due to its extreme axial tilt, but we’ll use a small tilt for visibility)
    }
  },
  {
    name: 'Neptune',
    size: 1.2,
    color: 'darkblue',
    distance: 300.7,
    orbitSpeed: 0.03,
    moons: [
      { name: 'Triton', size: 0.3, distance: 3.0, speed: 1.1 },
      { name: 'Nereid', size: 0.15, distance: 5.0, speed: 0.7 }
    ],
    ring: {
      innerRadius: 1.8, // 1.5 * size
      outerRadius: 2.4, // 2.0 * size
      color: 'lightgray',
      tilt: 0.03 // ~2 degrees
    }
  }
];

export default planetsData;