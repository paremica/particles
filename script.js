document.addEventListener("DOMContentLoaded", function () {
  tsParticles.load("particles-js", {
    particles: {
      number: {
        value: 200, // Number of particles for full-screen effect
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
        value: 4, // Small circle size
        random: true
      },
      move: {
        enable: true,
        speed: 2,  // Speed of movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out", // Particles leave the canvas and re-enter from the opposite side
        bounce: false,
      },
      line_linked: {
        enable: false // Disable line linking
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"  // Particles move away from the mouse
        },
        onclick: {
          enable: true,
          mode: "push"  // Clicking adds more particles
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,  // How far particles move when hovered
          duration: 0.5
        },
        push: {
          particles_nb: 4  // Number of particles created on click
        }
      }
    },
    retina_detect: true
  });
});
