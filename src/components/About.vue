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
              "Herzlich willkommen! Ich freue mich, dass Sie auf meiner Homepage sind. Mein Name ist Benjamin Baunach und ich bin Student an der Hochschule Esslingen, wo ich Medieninformatik studiere. <br>
              Während meines Studiums habe ich eine Vielzahl von spannenden Themen kennengelernt, darunter digitale Medien wie Virtual Reality (VR) und Augmented Reality (AR), 3D-Programmierung sowie 2D-Programmierung. 
              Darüber hinaus habe ich mich intensiv mit Webentwicklung im Frontend und Backend beschäftigt. Auch spezifischere Bereiche wie Bash-Scripting und Pipelining haben es mir angetan. <br><br>
              Ein weiterer wichtiger Teil meines Werdegangs ist meine Ausbildung zum Schreiner. Die Möglichkeit, kreativ zu sein und Dinge zu entwerfen und zu bauen, hat mir immer viel Freude bereitet. 
              Ich liebe es, neue Ideen zum Leben zu erwecken und mit meiner Kreativität zu spielen. <br><br>
              Als neugieriger Mensch habe ich immer den Drang, neue Dinge zu lernen und mich mit neuen Technologien zu beschäftigen. In der sich ständig weiterentwickelnden Welt der Informatik gibt es immer etwas Neues zu entdecken, 
              und ich freue mich darauf, an diesem Fortschritt teilzuhaben. <br><br>
              Abgesehen von meinen beruflichen Interessen habe ich auch einige Hobbys. In meiner Freizeit gehe ich gerne angeln, wandere in der Natur und widme mich dem PC-Spielen.<br><br>
              Ich lade Sie ein, meine Homepage zu erkunden und mehr über meine Projekte und Leidenschaften zu erfahren. Ich danke Ihnen für Ihr Interesse!"
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
  height: 100%;
  /* Ändern Sie max-height zu height */
  overflow-y: auto;
  background-color: black;
}

.animation-canvas {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150vh;
  z-index: -1;
  overflow-y: auto;
}


.foreground-elements-about {
  width: 100%;
  /* Anpassen für Responsive Design */
  max-width: 1500px;
  /* Setzen Sie die maximale Breite auf 1500px */
  height: auto;
  margin: auto auto auto;
  margin-top: 2em;
  margin-bottom: 2em;
  /* Kombinieren Sie die Margin-Regeln */
  overflow-y: none;
  background-color: #F5F5F5;
  align-items: center;
  border-radius: 18px;

}

.foreground-elements-about>* {
  /* opacity: 1; */
}

.foreground-elements-about>*:not(strong) {
  /* opacity: 1; */
}

.about-me {
  text-align: center;
  padding-bottom: 3em;
}

.about-h1 {
  font-family: 'Almarai_extra', sans-serif;
  font-size: 50px;

}

.about-h2 {
  font-family: 'Almarai_extra', sans-serif;
  font-size: 35px;
}

.about-h3 {
  font-family: 'Almarai_normal', sans-serif;
  font-size: 30px
}


p {
  font-family: 'Almarai_normal', sans-serif;
  font-size: 22px;


}

.bio {
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
  height: auto;
  /* Ändern Sie height zu auto */
  min-height: 700px;
  /* Setzen Sie min-height auf 700px */
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
  height: 100%;
  /* Ändern Sie height zu 100% */
  background-color: black;
}


.ed-ex-container {
  margin-right: 5em;

}

.education {
  margin-bottom: 12em;
  text-align: left;
}

.experience {
  margin-top: 12em;
  text-align: left;

}

.practical-experience {
  margin-left: 10em;
  margin-right: 5em;
  text-align: left;
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

  .foreground-elements-about {
    max-width: 100%;
    /* Setzen Sie die maximale Breite auf 100% */
    margin: 0;
    border-radius: 0;
  }

  .about-h1 {
    font-size: 30px;
  }

  .about-h2 {
    font-size: 24px;
  }

  .about-h3 {
    font-size: 20px;
  }

  .about-me {
    padding: 1em;
  }

  .bio {
    margin: 1em;
  }

  p {
    font-size: 15px;

  }

  strong {
    font-family: 'Almarai_normal', sans-serif;
    font-size: 15px;

  }

  em {
    font-family: 'Almarai_normal', sans-serif;
    font-size: 15px;

  }

  .portfolio-container {
    flex-direction: column;
    min-height: auto;
    /* Setzen Sie min-height auf auto */
    padding: 0;
  }

  .wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .black-contrast {}

  .ed-ex-container {
    margin-right: 0;
    margin-bottom: 3em;
  }

  .education {
    margin-bottom: 3em;
  }

  .experience {
    margin-top: 3em;
  }

  .practical-experience {
    margin-top: -3em;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 3em;
  }
}</style>