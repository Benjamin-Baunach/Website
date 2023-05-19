<template>
  <div class="canvas-container">
    <canvas ref="canvas1" class="animation-canvas"></canvas>
    <div class="foreground-elements">
      <div class="foregroubd-container">
        <div class="item-container">
          <h3 class="home-h3">Hey</h3>
          <h1 class="home-h1">Mein Name ist Benjamin Baunach</h1>
          <h2 class="home-h2">Student für Software und Medieninformatik</h2>
        </div>
        <img class="profile-image" src="../assets/Profile.png" alt="">
      </div>
      <div class="button-container">
        <router-link to="/contact" class="middle"><button class="glowing-btn glowing-btn-small-width">
            <span class="glowing-txt">GET <span class="faulty-letter">CONNECTED</span></span>
          </button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-Page',
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.animate();
    });
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas1;
      if (!canvas) {
        return;
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      this.c = canvas.getContext('2d');
      this.n_stars = 150;
      this.colors = ['#176ab6', '#fb9b39'];
      for (let i = 0; i < 98; i++) {
        this.colors.push('#fff');
      }

      this.stars = [];
      for (let i = 0; i < this.n_stars; i++) {
        this.stars.push(this.createStar());
      }

      window.addEventListener('resize', this.resizeHandler);
    },
    createStar() {
      const canvas = this.$refs.canvas1;
      if (!canvas) {
        return;
      }
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.1;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const dy = -Math.random() * 0.3;

      return { x, y, radius, color, dy };
    },
    drawStar(star) {
      const c = this.c;
      c.beginPath();
      c.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      c.shadowBlur = Math.floor(Math.random() * 13) + 3;
      c.shadowColor = star.color;
      c.strokeStyle = star.color;
      c.fillStyle = 'rgba(255, 255, 255, 0.5)';
      c.fill();
      c.stroke();
      c.closePath();
    },
    updateStar(star, index) {
      if (star.y - star.radius < 0) {
        this.stars.splice(index, 1);
        this.stars.push(this.createStar());
      }
      star.y += star.dy;
      this.drawStar(star);
    },
    resizeHandler() {
      const canvas = this.$refs.canvas1;
      if (!canvas) {
        return;
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.stars = [];
      for (let i = 0; i < this.n_stars; i++) {
        this.stars.push(this.createStar());
      }
    },
    animate() {
      const canvas = this.$refs.canvas1;
      if (!canvas) {
        return;
      }
      this.c.clearRect(0, 0, canvas.width, canvas.height);
      this.c.fillStyle = 'black';
      this.c.fillRect(0, 0, canvas.width, canvas.height);
      this.stars.forEach(this.updateStar);
      requestAnimationFrame(this.animate);
    },
  },
};
</script>

<style scoped>
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

.canvas-container {
  position: fixed;
  margin-top: 7em;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.animation-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/*******
Webpage Content
********/
.foreground-elements {
  display: flex;
  flex-direction: column;

}

.foregroubd-container {
  margin-top: 5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20em;
}

.item-container {
  margin-top: 5em;
}

.home-h1 {
  color: white;
  font-family: 'Almarai_extra', sans-serif;
  font-size: 50px;

}

.home-h2 {
  color: #1995AD;
  font-family: 'Almarai_extra', sans-serif;
  font-size: 40px;
}

.home-h3 {
  color: white;
  font-family: 'Almarai_normal', sans-serif;
  font-size: 30px;
}

/*******.
 Button Animation
********/

.button-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.glowing-btn {
  margin-top: 3em;
  position: relative;
  color: var(--glow-color);
  cursor: pointer;
  padding: 0.35em 1em;
  border: 0.15em solid var(--glow-color);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  --glow-color: #15b5d5;
  font-family: "Raleway", sans-serif;
  font-size: 2em;
  font-weight: 900;
  letter-spacing: 1em;

  -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  -moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  animation: border-flicker 2s linear infinite;
}

.glowing-txt {
  float: left;
  margin-right: -0.8em;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
  animation: text-flicker 3s linear infinite;
}

.glowing-btn-large {

  padding: 0.5em 1.5em;
  /* Passe den Padding-Wert an, um die Größe des Buttons zu ändern */
  font-size: 1.5em;
  /* Passe die Schriftgröße an, um die Größe des Button-Textes zu ändern */
  border-radius: 0.6em;
  /* Passe den border-radius-Wert an, um die abgerundeten Ecken des Buttons zu ändern */
}

.glowing-btn-small-width {
  width: 780px;
  /* Passe den Width-Wert an, um die Gesamtgröße des Buttons zu ändern */
}

.faulty-letter {
  opacity: 0.5;
  animation: faulty-flicker 2s linear infinite;
}

.glowing-btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
  background: var(--glow-color);
  pointer-events: none;
}

.glowing-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: var(--glow-color);
  box-shadow: 0 0 2em 0.2em var(--glow-color);
  transition: opacity 100ms linear;
}

.glowing-btn:hover {
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  animation: none;
}

.glowing-btn:hover .glowing-txt {
  animation: none;
}

.glowing-btn:hover .faulty-letter {
  animation: none;
  text-shadow: none;
  opacity: 1;
}

.glowing-btn:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.glowing-btn:hover:after {
  opacity: 1;
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 0.1;
  }

  4% {
    opacity: 0.5;
  }

  19% {
    opacity: 0.5;
  }

  21% {
    opacity: 0.1;
  }

  23% {
    opacity: 1;
  }

  80% {
    opacity: 0.5;
  }

  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }

  20% {
    opacity: 1;
  }

  25% {
    opacity: 0.3;
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }

  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }

  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 1240px) {
  .canvas-container {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    z-index: -1;
  }

  .animation-canvas {
    width: 100%;
    height: auto;
  }

  .glowing-btn {
    font-size: .8em;
  }

  .middle {
    margin-left: auto;
    margin-right: auto;
  }

  .foregroubd-container {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  .item-container {
    margin-top: 1em;
    margin-left: 2em;
  }

  .home-h1 {
    font-size: 30px;
  }

  .home-h2 {
    font-size: 24px;
  }

  .home-h3 {
    font-size: 20px;
  }

  .glowing-btn-small-width {
    width: 100%;
  }

  .faulty-letter {
    opacity: 1;
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }
}
</style>