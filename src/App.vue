<template>
  <div class="overhead">
    <div class="navbarContainer">
      <nav class="navbarLogo">
        <router-link to="/Website" class="navbarLogoText"> BENJAMIN BAUNACH</router-link>
        <p class="BallClick"> Click the ball</p>
        <div class="navbarLiElemente">
          <canvas ref="canvas" id="cnv"></canvas>
          <li class="navbarElements" :class="{ active: $route.path === '/Website' }"><router-link to="/Website">HOME</router-link></li>
          <li class="navbarElements" :class="{ active: $route.path === '/about' }"><router-link to="/about">ABOUT</router-link></li>
          <li class="navbarElements" :class="{ active: $route.path === '/projects' }"><router-link to="/projects">PROJECTS</router-link></li>
          <li class="navbarElements" :class="{ active: $route.path === '/contact' }"> <router-link to="/contact">CONTACT</router-link></li>
        </div>
      </nav>
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    this.animateCanvas();
  },
  methods: {
    animateCanvas() {
      const canvas = document.getElementById("cnv");
      const ctx = canvas.getContext("2d");

      console.log(canvas.width);
      console.log(canvas.height);

      let x = 0;
      let y = canvas.height / 2;
      let speed = 2;
      let direction = 1; // Richtung des Balls: 1 für rechts, -1 für links

      // Array für die Teilchen
      let particles = [];

      function createParticle(x, y) {
        // Anzahl der Teilchen
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
          const particle = {
            x: x,
            y: y,
            radius: Math.random() * 5 + 1, // Zufälliger Radius zwischen 1 und 6
            vx: Math.random() * 2 - 1, // Zufällige Geschwindigkeit in x-Richtung zwischen -1 und 1
            vy: Math.random() * 2 - 1, // Zufällige Geschwindigkeit in y-Richtung zwischen -1 und 1
            alpha: 1, // Transparenz der Teilchen
          };

          particles.push(particle);
        }
      }

      function drawParticles() {
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
          ctx.fillStyle = "#1995AD";
          ctx.globalAlpha = particle.alpha;
          ctx.fill();

          particle.x += particle.vx;
          particle.y += particle.vy;

        }
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "#1995AD";
        ctx.fill();

        x += speed * direction;

        // Überprüfen, ob der Ball den Rand erreicht hat
        if (x > canvas.width - 20) {
          x = canvas.width - 20;
          direction = -1; // Richtung umkehren
        } else if (x < 20) {
          x = 20;
          direction = 1; // Richtung umkehren
        }

        drawParticles(); // Teilchen zeichnen

        requestAnimationFrame(draw);
      }

      canvas.addEventListener("click", function (event) {
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // Überprüfen, ob der Ball angeklickt wurde
        if (Math.abs(clickX - x) <= 20 && Math.abs(clickY - y) <= 20) {
          createParticle(x, y); // Teilchen erzeugen
        }
      });

      draw();
    },
  },
}

</script>
<style>

body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'Almarai_extra';
  src: url('@/assets/fonts/Almarai-ExtraBold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Almarai_normal';
  src: url('@/assets/fonts/Almarai-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.overhead{
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.navbarContainer {
  height: 7em;
  background-color: #A1D6E2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  z-index: 10; /* Höherer z-index-Wert für die Navbar */
}

.navbarLogo {
  display: flex;
  align-items: center;
  margin-left: 2em;
}

.navbarLogoText {
  font-family: 'Almarai_extra', sans-serif;
  font-size: 36px;
  font-weight: bold;
  text-decoration: none;
  color: black;
}

.navbarLiElemente {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbarLiElemente li {
  margin-left: 2em;
}

.navbarLiElemente a {
  background-color: #F1F1F2;
  border-radius: 5px;
  padding: 10px 10px;
  font-family: 'Almarai_normal', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.navbarLiElemente a:hover {
  background-color: #1995AD;
}

#cnv {
  margin-left: 5em;
  margin-right: 5em;
}
.container {
  margin-top: 7em;
}
.navbarLiElemente li.active a {
  background-color: #1995AD;
}

.BallClick {
  font-family: 'Almarai_normal', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #1995AD;
  margin-left: 10em;
}
</style>