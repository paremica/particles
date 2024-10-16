document.addEventListener("DOMContentLoaded", function () {
  tsParticles.load("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"] // Colorful particles
      },
      shape: {
        type: "circle", // Particles are small circles
      },
      opacity: {
        value: 0.8,
        random: true
      },
      size: {
        value: 4,
        random: true
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.5
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
});

