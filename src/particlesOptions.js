const particlesOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 5 },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
  },
  detectRetina: true,
};

export default particlesOptions;
