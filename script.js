const planets = [
  { id: "sun", path: "sun.json" },
  { id: "mercury" },
  { id: "venus" },
  { id: "earth", path: "earth.json" },
  { id: "mars", path: "mars.json" },
  { id: "jupiter", path: "jupiter.json" },
  { id: "saturn", path: "saturn.json" },
  { id: "uranus" },
  { id: "neptune", path: "neptune.json" }
];

const transformOrigins = { sun: 45, mercury: 45, venus: 75, earth: 115, mars: 140, jupiter: 180, saturn: 200, uranus: 225, neptune: 260 };
const durations = { mercury: 1, venus: 2, earth: 3, mars: 4, jupiter: 5, saturn: 6, uranus: 7, neptune: 8 };

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(MotionPathPlugin);

  planets.forEach(planet => {
    const animation = bodymovin.loadAnimation({
      container: document.getElementById(planet.id),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: planet.path
    });

    gsap.set(`#${planet.id}`, { xPercent: 0, yPercent: 0, x: 0, y: 0, transformOrigin: `${getTransformOrigin(planet.id)}px ${getTransformOrigin(planet.id)}px` });
    gsap.to(`#${planet.id}`, { rotation: 360, ease: "none", repeat: -1, duration: getDuration(planet.id) });
  });

  function getTransformOrigin(id) { return transformOrigins[id]; }
  function getDuration(id) { return durations[id]; }
});
