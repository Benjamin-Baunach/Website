<template>
  <div class="canvas-container">
    <canvas ref="canvas1" class="animation-canvas"></canvas>
    <div class="foreground-elements">
      <div class="items-container">

        <div class="contact-content">
          <a href="https://www.linkedin.com/in/benny-baunach-774957276" target="_blank">
          <font-awesome-icon icon="fab fa-linkedin" class="fa"></font-awesome-icon>
          <h2>LinkedIn</h2>
           
          </a>

        </div>
        <div class="contact-content">
          <i class="fa-solid fa-envelope"></i>
          <h2>Email Adress</h2>
          <p>Benjaminbaunach@posteo.de </p>

        </div>
        <div class="contact-content">
          <a href="https://gitlab.com/benjaminbaunach16" target="_blank">
          <font-awesome-icon icon="fab fa-gitlab-square" class="fa"></font-awesome-icon>
          <h2>GitLab</h2>
            
          </a>

        </div>
      </div>
      <div class="contact-form">
        <h2>Contact Me</h2>
        <form action="mailto:benjaminbaunach@posteo.de" method="POST"  enctype="text/plain">
          <div class="form-group">
            <input type="text" id="name" name="name" required placeholder="Enter your Name">
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" required placeholder="Enter your email adress">
          </div>
          <div class="form-group">
            <textarea id="message" name="message" rows="4" required placeholder="Message ..."
              style="resize: none; overflow: auto;"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import '@fortawesome/fontawesome-free/css/all.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGitlabSquare } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faEnvelope, faMapMarkerAlt, faGitlabSquare);

export default {
  name: 'ContactPAge',

  components: {
    FontAwesomeIcon,
  },

  mounted() {
    this.$nextTick(() => {
      this.$refs.canvas1.width = this.$refs.canvas1.offsetWidth;
      this.$refs.canvas1.height = this.$refs.canvas1.offsetHeight;
      this.animateCanvas();
    });
  },
  methods: {
    animateCanvas() {
      const canvas = this.$refs.canvas1;
      const ctx = canvas.getContext('2d');

      let particlesArray;
      const numberOfParticles = 100;
      const particleSize = 5;
      const maxSpeed = 1;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      class Particle {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * particleSize + 1;
          this.speedX = Math.random() * maxSpeed - 0.5;
          this.speedY = Math.random() * maxSpeed - 0.5;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.size > 0.1) this.size -= 0.1;
          if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * particleSize + 1;
            this.speedX = Math.random() * maxSpeed - 0.5;
            this.speedY = Math.random() * maxSpeed - 0.5;
          }
        }
        draw() {
          ctx.fillStyle = 'rgba(161, 214, 226, 1)';
          ctx.strokeStyle = 'rgba(161, 214, 226, 0.5)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      }

      function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
      }

      init();
      animate();

      canvas.addEventListener('click', function (event) {
        const xPos = event.x;
        const yPos = event.y;
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].x = xPos;
          particlesArray[i].y = yPos;
        }
      });

      canvas.addEventListener('mousemove', function (event) {
        const xPos = event.x;
        const yPos = event.y;
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].x = xPos;
          particlesArray[i].y = yPos;
        }
      });

    }
  }


}
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
  background-color: #fbfbfb;
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

.foreground-elements {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.items-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* Zentriert die Elemente horizontal */
  position: relative;
  z-index: 2;
  margin-bottom: -100px;
  /* Anpassen des negativen Margins */
}

.contact-content {
  width: 250px;
  height: 250px;
  background-color: rgba(240, 240, 240, 0.7);
  margin: 2em;
  /* Verringert den Abstand zwischen den Elementen */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  /* Abgerundete Ecken hinzugefügt */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  /* Schatten hinzugefügt */
  font-size: 20px;
  color: #007BFF;
  /* Icon-Farbe */
  margin-bottom: 1em;
  font-family: 'Almarai_normal', sans-serif;
}

.contact-content a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.contact-content h2 {
  margin-left: 10px;
}

.contact-content i,
.fa {
  font-size: 50px;
}


.contact-content p {
  text-align: center;
  color: black;
  /* Icon-Farbe */
  font-size: 18px;

}

.contact-form {

  height: 600px;
  width: 700px;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Almarai_normal', sans-serif;
  background-color: rgba(161, 214, 226, 0.7);
  /* Hintergrundfarbe geändert */
  border-radius: 15px;
  /* Abgerundete Ecken hinzugefügt */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  /* Schatten hinzugefügt */
  justify-content: center;
  align-items: center;
}

.contact-form h2 {
  text-align: center;
  font-size: 40px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}


.form-group input,
.form-group textarea {
  margin: auto;
  width: 500px;
  padding: 1em;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

button {
  padding: 0.5em 2em;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  margin-top: 2em;
}

button:hover {
  background-color: #0056b3;
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
  .items-container {
    margin-top: 5em;
    margin-bottom: 3em;
    flex-direction: column;
    align-items: center;

  }
  
  .contact-content {
    width: 210px;
    height: 200px;
   
  }
  
  .contact-content p {
    font-size: 16px;
  }
  
  .contact-form {
    height: auto;
    width: 80%;
    padding: 2em;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
  }
}

</style>
