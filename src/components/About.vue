<template>
  <div class="canvas-container">
    <canvas ref="canvas1" class="animation-canvas"></canvas>
    <div class="foreground-elements-about">
      <div class="about-me">

        <div class="profile">
          <h1 class="about-h1">Benjamin Baunach</h1>
        </div>

        <div class="bio">
          <h3 class="about-h3 bio">Biografie</h3>
          <p>
            "Hallo! Mein Name ist [Dein Name] und ich bin [deine Tätigkeit]. Mit großer Leidenschaft widme ich mich dem [dein Interessengebiet] und es bereitet mir Freude, [weitere Informationen über dich]. Ich bin stets motiviert, meine Fähigkeiten in diesem Bereich weiterzuentwickeln und neue Herausforderungen anzunehmen. Wenn es darum geht, [deine Leidenschaft oder Expertise], bin ich immer voller Begeisterung und Engagement. Durch [weitere Informationen über dich] konnte ich bereits wertvolle Erfahrungen sammeln, die mein Wissen und meine Fähigkeiten kontinuierlich erweitern. Ich freue mich darauf, mein Wissen und meine Leidenschaft mit anderen zu teilen und gemeinsam an spannenden Projekten zu arbeiten."
          </p>
        </div>

        <div class="portfolio-container">
          <div class="wrapper">
          
          <div class="ed-ex-container">
              <div class="education">
                <h3 class="about-h3">Bildungsweg</h3>
                <ul>
                  <li>
                    <strong>Studium Medieninformatik, Hochschule Esslingen</strong><br>
                    <em>03/2019 – heute</em><br>

                  </li>
                  <li>
                    <strong>Ausbildung zum Tischler, Schreinerei Klingler</strong><br>
                    <em>2017 - 2019</em>

                  </li>
                  <li>
                    <strong>Waldorfschule Engelberg</strong><br>
                    <em>2002 – 2016</em><br>

                  </li>
                </ul>
              </div>

              <div class="experience">
                <h3 class="about-h3">Berufserfahrung</h3>
                <ul>
                  <li>
                    <strong>Aushilfe bei der Deutschen Post</strong><br>
                    <em>01/2019 – heute</em><br>

                  </li>
                  <li>
                    <strong>Geselle in der Schreinerei Klingler, Bad-Cannstatt</strong><br>
                    <em>09/2019 – 12/2019</em><br>

                  </li>
                </ul>
              </div>
            </div>
            <div class="black-contrast"></div>

            <div class="practical-experience">
              <h3 class="about-h3">andere Tätigkeiten</h3>
              <ul>
                <li>
                  <strong>Work and Travel Neuseeland</strong><br>
                  <em>01/2017 – 09/2017</em>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'AboutPage',

  mounted() {
    this.$nextTick(() => {
      this.init();
      this.generateGrayScaleColors(); // Graustufen-Farben generieren
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
      this.n_hexagons = 100;
      this.hexagonSize = 5;
      this.hexagonColors = [

      ];
      this.hexagons = [];
      for (let i = 0; i < this.n_hexagons; i++) {
        this.hexagons.push(this.createHexagon());
      }

      window.addEventListener('resize', this.resizeHandler);
    },
    createHexagon() {
      const canvas = this.$refs.canvas1;
      if (!canvas) {
        return;
      }
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const colorIndex = Math.floor(Math.random() * this.hexagonColors.length);
      const angle = Math.random() * Math.PI * 2; // Zufälliger Winkel zwischen 0 und 2*pi
      const speed = Math.random() * 0.6; // Zufällige Geschwindigkeit zwischen 1 und 3
      const maxSize = 5; // Maximale Größe der Hexagons
      const size = Math.random() * maxSize; // Zufällige Größe zwischen 0 und maxSize
      const dx = Math.cos(angle) * speed; // Horizontaler Geschwindigkeitsvektor
      const dy = Math.sin(angle) * speed; // Vertikaler Geschwindigkeitsvektor

      return { x, y, colorIndex, dx, dy, size };
    },
    drawHexagon(hexagon) {
      const c = this.c;
      const { x, y, colorIndex, size } = hexagon;
      const color = this.hexagonColors[colorIndex];

      // Zeichne den Hexagon basierend auf der angegebenen Größe
      const angleStep = (Math.PI / 180) * 60;
      const centerX = x + size;
      const centerY = y + size;
      c.beginPath();
      c.moveTo(centerX + size * Math.cos(0), centerY + size * Math.sin(0));
      for (let angle = 1; angle <= 6; angle++) {
        const currentAngle = angle * angleStep;
        const x = centerX + size * Math.cos(currentAngle);
        const y = centerY + size * Math.sin(currentAngle);
        c.lineTo(x, y);
      }
      c.fillStyle = color;
      c.fill();
      c.closePath();
    },
    updateHexagon(hexagon, index) {
      if (hexagon.y - this.hexagonSize * Math.sqrt(1) < 0) {
        this.hexagons.splice(index, 1);
        this.hexagons.push(this.createHexagon());
      }

      hexagon.y += hexagon.dy;

      const colorChangeDelay = 50; // Zeit in Millisekunden für den Farbwechsel
      const elapsedSeconds = Date.now() / 1000; // Verstrichene Zeit in Sekunden
      const colorIndex = Math.floor((elapsedSeconds * 1000) / colorChangeDelay) % this.hexagonColors.length;
      hexagon.colorIndex = colorIndex;

      hexagon.color = this.hexagonColors[colorIndex]; // Farbe aus dem Array abrufen

      this.drawHexagon(hexagon);
    },
    resizeHandler() {
      const canvas = this.$refs.canvas1;
      if (!canvas) {
        return;
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.hexagons = [];
      for (let i = 0; i < this.n_hexagons; i++) {
        this.hexagons.push(this.createHexagon());
      }
    },
    animate() {
      const canvas = this.$refs.canvas1;
      if (!canvas) {
        return;
      }
      this.c.clearRect(0, 0, canvas.width, canvas.height);
      this.c.fillStyle = '#d6d6d6';
      this.c.fillRect(0, 0, canvas.width, canvas.height);
      this.hexagons.forEach(this.updateHexagon);
      requestAnimationFrame(this.animate);
    },

    generateGrayScaleColors() {
      const numGrayColors = 500; // Anzahl der gewünschten Graustufen
      const numBlueColors = 500; // Anzahl der gewünschten Blautöne
      const grayScaleColors = [];
      const blueColors = [];

      for (let i = 0; i < numGrayColors; i++) {
        const grayValue = Math.round((i / (numGrayColors - 1)) * 255);
        const color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
        grayScaleColors.push(color);
      }

      for (let i = 0; i < numBlueColors; i++) {
        const blueValue = Math.round((i / (numBlueColors - 1)) * 255);
        const color = `rgb(0, 0, ${blueValue})`;
        blueColors.push(color);
      }

      // Erzeuge den umgekehrten Farbverlauf für Graustufen
      const reversedGrayColors = grayScaleColors.slice().reverse();

      // Kombiniere Graustufen und Blautöne
      this.hexagonColors = [...grayScaleColors, ...reversedGrayColors, ...blueColors];
    },
  

  },
};



</script>

<style>

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
  height: 100%;  /* Ändern Sie max-height zu height */
  overflow-y: auto;
  background-color: #d6d6d6;
}

.animation-canvas {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow-y: auto;
}


.foreground-elements-about {
  width: 100%; /* Anpassen für Responsive Design */
  max-width: 1500px; /* Setzen Sie die maximale Breite auf 1500px */
  height: auto;
  margin: auto auto auto; /* Kombinieren Sie die Margin-Regeln */
  overflow-y: auto;
  background-color: rgba(161, 214, 226, 0.4);
  align-items: center;
  border-radius: 18px;

}

.foreground-elements-about > * {
  opacity: 1;
}

.foreground-elements-about > *:not(strong) {
  opacity: 1;
}

.about-me {
  text-align: center;
  margin-bottom: 2em;
  padding-bottom: 2em;
}

.about-h1{
  font-family: 'Almarai_extra', sans-serif;
  font-size: 50px;

}

.about-h2{
  font-family: 'Almarai_extra', sans-serif;
  font-size: 35px;
}

.about-h3{
  font-family: 'Almarai_normal', sans-serif;
  font-size: 30px

}


p {
  font-family: 'Almarai_normal', sans-serif;
  font-size: 22px;
  
  
}
.bio{
  text-align: left;
  margin-left: 2em;
  margin-right: 2em;
  text-align: justify;
  text-align-last: none;
  
}

strong {
  font-family: 'Almarai_normal', sans-serif;
  font-size: 20px;

}

em {
  font-family: 'Almarai_normal', sans-serif;
  font-size: 20px;

}


.portfolio-container {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  height: auto; /* Ändern Sie height zu auto */
  min-height: 700px; /* Setzen Sie min-height auf 700px */
  overflow-y: auto;
  margin-bottom: 2em;
  padding: 20px;
  font-family: 'Almarai_normal', sans-serif;
}
.wrapper {
  display: flex;
  align-items: center;
}


.black-contrast {
  width: 4px;
  height: 100%; /* Ändern Sie height zu 100% */
  background-color: black;
}


.ed-ex-container {
  margin-right: 5em;

}

.education{
  margin-bottom: 12em;
  text-align: left;
}

.experience{
  margin-top: 12em;
  text-align: left;

}

.practical-experience {
  margin-left: 10em;
  margin-right: 5em;
  text-align: left;
}
</style>