<template>
  <div class="page-wrapper">
    <section v-for="(project, index) in projects" :key="index" class="project-section"
      :class="{ 'bg-blue': index % 2 === 0, 'bg-grey': index % 2 === 1 }">
      <div class="content-wrapper">
        <div class="Heading" :class="{ 'color-white': index % 2 === 1 }">
          <h2>{{ project.title }}</h2>
          <a v-if="project.gitlab" :href="project.link" target="_blank" class="gitlab-link">
            <font-awesome-icon icon="fab fa-gitlab-square" class="fa"></font-awesome-icon>
            <h3>GitLab</h3>
          </a>
        </div>
        <div class="discription-container">
          <p v-html="project.description.replace(/\n/g, '<br>')"></p>
        </div>
        <div class="image-container">
          <div v-for="(image, index) in project.images" :key="index" class="image-wrapper">
            <div class="image-box" @click="openImage(image)">
              <div class="image-frame">
                <img :src="image" :alt="`Project ${project.title} image ${index}`" class="project-image">
              </div>
            </div>
          </div>
        </div>
        <div v-if="enlargedImage" class="modal" @click="enlargedImage = null">
          <div class="modal-content" @click.stop>
            <img :src="enlargedImage" class="modal-image" @click.stop>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

//KaffeKasse
import landingPage from "../assets/Projekt-KaffeKasse/Landing-Page.png";
import raspberry from "../assets/Projekt-KaffeKasse/Raspberry-mit-Terminal.png"
import endProduct from "../assets/Projekt-KaffeKasse/Endprodukt.png"

//Keyman
import customerPage from "../assets/Projekt-Keyman/Customers-Page.png"
import customerDetailPage from "../assets/Projekt-Keyman/Customer-Detail-Page.png"
import contractsPage from "../assets/Projekt-Keyman/Contracts-Page.png"
import contractsDetailPage from "../assets/Projekt-Keyman/Contracts-Details-Page.png"
import userPage from "../assets/Projekt-Keyman/User-Page.png"
import userManagePage from "../assets/Projekt-Keyman/User-manage-Page.png"
import userProfilePage from "../assets/Projekt-Keyman/User-Profil-Page.png"

//2d-Minigolf
import spielStart from "../assets/Projekt-2d-Spiel/Spiel-Start.png"
import shoot from "../assets/Projekt-2d-Spiel/Schießen.png"
import shoot2 from "../assets/Projekt-2d-Spiel/Schießen2.png"
import win from "../assets/Projekt-2d-Spiel/Spiel-Gewonnen.png"

//Vr-Baskeball
import spiel01 from "../assets/Projekt-VR-Spiel/Spiel01.png"
import spiel02 from "../assets/Projekt-VR-Spiel/Spiel02.png"

//Blender
import affen from "../assets/Projekt-Blender/Affen.png"
import bildschirme from "../assets/Projekt-Blender/Bildschirme.png"
import birnen from "../assets/Projekt-Blender/Birnen.png"
import kopfhörer from "../assets/Projekt-Blender/Kopfhörer2.png"
import würfel from "../assets/Projekt-Blender/Würfel.png"

//3dsmax
import axt from "../assets/Projekt-3ds/Axt.png"
import bottle from "../assets/Projekt-3ds/Flasche.png"


//Photoshop
import fantasy from "../assets/Projekt-Photoshop/Fantasy.png"
import dinerTime from "../assets/Projekt-Photoshop/Diner-Time.png"
import squid from "../assets/Projekt-Photoshop/Tintenfisch.png"

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGitlabSquare } from '@fortawesome/free-brands-svg-icons';


library.add(faGitlabSquare);


export default {

  components: {
    FontAwesomeIcon,  // Hier wird das FontAwesomeIcon registriert
  },

  name: 'ProjectsPage',
  data() {
    return {
      enlargedImage: null,

      projects: [
        {
          title: 'Smarte Kasse',
          description: `Diese Projektarbeit stellt das von unserem Team entwickelte digitale Kaffeemanagementsystem vor. Unser Ziel war es, eine benutzerfreundliche Website zu erstellen und die RFID-Technologie in Kombination mit einem Raspberry Pi Terminal zu nutzen, um eine effiziente Verwaltung des Kaffeekonsums bei "pep.digital GmbH" und Steinbeis zu ermöglichen . \n
          Wir haben verschiedene Technologien eingesetzt, um ein robustes und zuverlässiges System zu gewährleisten. Die Entwicklung der Benutzeroberfläche wurde mit React realisiert, einer leistungsstarken Bibliothek für die Erstellung webbasierter Anwendungen. Die API wurde in JavaScript mit Node und Express entwickelt, um eine nahtlose Kommunikation zwischen dem Frontend und der Datenbank zu ermöglichen. Als Datenbankmanagementsystem wurde MySQL, eine bewährte Open-Source-Lösung für SQL-Datenbanken, verwendet. Die Anwendung wurde zur einfachen Bereitstellung und Skalierbarkeit in Docker-Containern isoliert. \n
          Ein Schlüsselelement unseres Systems ist die Integration eines Raspberry Pi-Terminals mit einem Touchscreen und einem RFID-Scanner. Dadurch können die Mitarbeiter auf intuitive und benutzerfreundliche Weise mit dem System interagieren, indem sie einfach ihre RFID-Karte scannen, um Kaffee zu erhalten oder Informationen abzurufen \n
          Das Projektmanagement spielte eine entscheidende Rolle bei der erfolgreichen Umsetzung des Projekts. Wir nutzten GitLab als zentrales Tool für die Versionskontrolle und die Zusammenarbeit. Durch die Anwendung agiler Methoden waren wir in der Lage, effizient zu arbeiten, Herausforderungen zu bewältigen und das Projekt erfolgreich abzuschließen.\
          `,
          images: [landingPage, raspberry, endProduct],
          gitlab: true,
          link: "https://gitlab.com/benjaminbaunach16/smartekasse.git"
        },
        {
          title: "Keyman",
          description: `"Keyman" war ein Projekt, das im Rahmen eines Hochschulmoduls entwickelt wurde. Das Hauptziel bestand darin, eine robuste Softwarearchitektur aufzubauen, die eine effiziente Verwaltung von Schlüsseldaten ermöglichte. \n
          Das Projekt umfasste sowohl die Entwicklung des Frontends mit React als auch des Backends mit ORM (Object-Relational Mapping) und REST JaxRS. 
          Im Frontend wurde React verwendet, eine leistungsstarke JavaScript-Bibliothek zur Erstellung von benutzerfreundlichen Webanwendungen. Durch die Verwendung von React konnten wir eine reaktive Benutzeroberfläche entwickeln, die eine nahtlose Interaktion mit den Schlüsseldaten ermöglichte. 
          Das Frontend wurde mit modernen UI-Komponenten und einer intuitiven Benutzeroberfläche gestaltet, um eine angenehme Benutzererfahrung zu gewährleisten. Das Backend wurde mit ORM (Object-Relational Mapping) entwickelt, was eine effiziente Datenbankinteraktion ermöglichte. 

          ORM erleichtert die Kommunikation zwischen der Anwendung und der Datenbank, indem es den Entwicklern ermöglicht, auf objektorientierte Weise auf die Daten zuzugreifen, anstatt direkt mit SQL-Abfragen arbeiten zu müssen. Dadurch konnten wir eine robuste und wartbare Datenzugriffsschicht erstellen.

          Zusätzlich wurde für die Implementierung der API das REST JaxRS-Framework verwendet. REST steht für Representational State Transfer und ist ein Architekturstil, der es ermöglicht, Webdienste über das HTTP-Protokoll bereitzustellen. JaxRS ist eine Java-Spezifikation für die Entwicklung von RESTful Web Services. 
          Die Verwendung von REST JaxRS erleichterte die Erstellung einer gut strukturierten und skalierbaren API, die es ermöglichte, Schlüsseldaten über HTTP-Endpunkte abzurufen, zu erstellen, zu aktualisieren und zu löschen.

          Das Projekt "Keyman" stellte eine Herausforderung dar, bei der wir unsere Fähigkeiten im Bereich der Softwarearchitektur, des Frontend- und Backend-Entwicklungsprozesses sowie der Datenbankinteraktion weiterentwickeln konnten. 
          Durch die Kombination von React, ORM und REST JaxRS konnten wir eine vollständige Lösung für die Verwaltung von Schlüsseldaten entwickeln, die den Anforderungen des Hochschulmoduls gerecht wurde und gleichzeitig praktische Erfahrungen in der Umsetzung einer umfangreichen Softwarearchitektur bo`,
          images: [customerPage, customerDetailPage, contractsPage, contractsDetailPage, userPage, userManagePage, userProfilePage],
          gitlab: true,
          link: "https://gitlab.com/benjaminbaunach16/keyman.git"
        },
        {
          title: "2D Minigolf Spiel",
          images: [spielStart, shoot, shoot2, win],
          description: `Das "2D Minigolf Spiel" ist ein unterhaltsames Projekt, das ein klassisches Minigolfspiel in 2D für Tablets umsetzt. Es wurde speziell für Touchscreen-Geräte entwickelt, um eine intuitive und benutzerfreundliche Spielerfahrung zu bieten.

                        Das Spiel nutzt JavaScript und die Canvas-API, um die Touchscreen-Funktionalität zu integrieren. Spielerinnen und Spieler können den Schlagwinkel und die Schlagstärke durch einfaches Wischen auf dem Bildschirm steuern. Durch die Implementierung von Touchevents wird eine natürliche und reaktionsschnelle Interaktion ermöglicht, die ein authentisches Minigolf-Erlebnis auf dem Tablet bietet.
                        
                        Das "2D Minigolf Spiel" enthält ein herausforderndes Level, in dem die Spielerinnen und Spieler ihre Fähigkeiten unter Beweis stellen können. 

                        Das Ziel besteht darin, den Golfball mit möglichst wenigen Schlägen ins Loch zu befördern. Durch geschicktes Ausnutzen der Touchscreen-Steuerung können Hindernisse überwunden und präzise Schläge ausgeführt werden, um das Level erfolgreich abzuschließen.`,
          gitlab: true,
          link: "https://gitlab.com/benjaminbaunach16/2d-minigolf-spiel.git"
        },
        {
          title: "VR Handball Spiel",
          images: [spiel01, spiel02],
          description: `Das "VR Handball Spiel" ist ein Virtual-Reality-Projekt, bei dem die Spieler in die aufregende Welt des Handballs eintauchen können. Das Spiel wurde speziell für VR-Brillen entwickelt und bietet ein immersives Spielerlebnis.
          
          Das "VR Handball Spiel" verwendet JavaScript und die THREE.js-Bibliothek, um eine realistische und interaktive Spielerfahrung zu bieten. JavaScript ermöglicht die Entwicklung einer dynamischen Spiellogik, während THREE.js eine leistungsstarke JavaScript-Bibliothek ist, die die Erstellung beeindruckender 3D-Grafiken und -Effekte in Webanwendungen ermöglicht.`,
          gitlab: true,
          link: "https://gitlab.com/benjaminbaunach16/vr-handballspiel.git"
        },
        {
          title: "Photoshop und Illustrator",
          images: [fantasy, dinerTime, squid],
          description: `Diese kreativen Projekte mit Photoshop und Illustrator waren Teil eines meiner Hochschulprojekte. Im Rahmen meiner Studienarbeit hatte ich die Möglichkeit, mich intensiv mit den Möglichkeiten dieser Software auseinanderzusetzen und meine gestalterischen Fähigkeiten weiterzuentwickeln.\n
          In Photoshop setzte ich verschiedene Techniken ein, darunter Überlagerungen, Pinselwerkzeuge, Freisteller und Schatten, um beeindruckende visuelle Kompositionen zu erstellen. Mit diesen Werkzeugen konnte ich Bilder auf kreative und ansprechende Weise manipulieren. \n
          Ich habe experimentiert, um interessante Effekte zu erzielen und meine Bilder zum Leben zu erwecken. Durch den gezielten Einsatz dieser Techniken konnte ich meine kreative Idee umsetzen und ein visuell ansprechendes Werk schaffen. \n
          In Illustrator konzentrierte ich mich auf die Gestaltung mit Schriften, insbesondere auf die Auswahl und Anpassung bestimmter Schriftarten, um typografische Elemente zu betonen. So konnte ich visuell ansprechende Designs und Layouts erstellen. \n
          Dieses Hochschulprojekt gab mir die Möglichkeit, mein gestalterisches Potenzial voll zu entfalten und praktische Erfahrungen im Umgang mit professionellen Grafikdesign-Tools zu sammeln. Die Bearbeitung von Bildern, das Erzielen künstlerischer Effekte und der gezielte Einsatz von Schriften sind wertvolle Fähigkeiten, die ich während meiner Arbeit an der Universität weiter ausbauen konnte.

          `,

        },
        {
          title: "Blender",
          images: [kopfhörer, birnen, affen, bildschirme, würfel,],
          description: `Willkommen bei meinen Blender-Projekten! Im Folgenden möchte ich meine ersten Projekte vorstellen, mit denen ich die Grundlagen der 3D-Modellierung und Animation in Blender erlernt habe. \n
          Diese Projekte haben es mir ermöglicht, mich intensiv mit den verschiedenen Funktionen und Werkzeugen von Blender vertraut zu machen und meine Fähigkeiten in der 3D-Modellierung und Animation zu entwickeln. \n
          Jedes Projekt stellte mich vor eine Herausforderung, bei der ich meine Fähigkeiten verbessern konnte. Es war eine spannende Möglichkeit, meine kreative Vision zu verwirklichen und die Grundlagen der 3D-Kunst in Blender kennenzulernen \n
          Es ist schön, einen Einblick in meine ersten Blender-Projekte geben zu können und die Fortschritte zu präsentieren. Die Erfahrung hat dazu beigetragen, meine Motivation für die weitere Entwicklung zu stärken und in Zukunft neue spannende Projekte in Angriff zu nehmen.\n
      .`,
        },
        {
          title: "3ds Max",
          images: [axt, bottle],
          description: `Das Projekt "3ds Max" war Teil eines Hochschulmoduls, das sich mit den Grundlagen der 3D-Modellierung und -Animation mit 3ds Max befasste. Im Rahmen dieses Projekts haben wir verschiedene Techniken und Funktionen von 3ds Max erforscht und angewendet. \n
          Ein Beispielprojekt innerhalb dieses Moduls war die Erstellung einer Axt. Wir konzentrierten uns auf Modellierungstechniken wie das Skalieren von Eckpunkten, das Formen von Polygonen und das Hinzufügen von Details. Durch die Anwendung dieser Techniken gelang es uns, eine realistische Darstellung einer Axt zu erstellen. Während des Projekts haben wir auch andere Funktionen von 3ds Max erkundet, wie z. B. die Anwendung von Texturen und Materialien. \n
          Das "3ds Max"-Projekt gab uns die Möglichkeit, unsere Kenntnisse und Fähigkeiten im Bereich der 3D-Modellierung zu erweitern und praktische Erfahrungen mit einer professionellen Software wie 3ds Max zu sammeln. Es war eine spannende Aufgabe, die uns half, eine solide Grundlage für weitere 3D-Projekte zu schaffen und unser Verständnis für die 3D-Welt zu vertiefen.
          `,
        },
      ],
    };
  },
  methods: {
    openImage(image) {
      console.log(image)
      this.enlargedImage = image;
    }

  }
};
</script>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  overflow: hidden; /* Verhindert das Scrollen im Modal */
  background-color: white; /* Hintergrundfarbe des Modals */
  border-radius: 10px; /* Abgerundete Ecken */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Schatten */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 100%; /* Das Bild nimmt die maximale Breite des Modals ein */
  max-height: 100%; /* Das Bild nimmt die maximale Höhe des Modals ein */
  object-fit: cover; /* Behält die Bildproportionen bei und passt das Bild vollständig in das Modal */
  display: block;
  margin: 0 auto;
  cursor: pointer; /* Cursor ändern, um anzuzeigen, dass das Bild klickbar ist */
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


body {
  margin: 0;
  padding: 0;
  font-family: 'Almarai_normal', sans-serif;
}

.Heading {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gitlab-link {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 10em;
}

.gitlab-link .fa {
  margin-right: 5px;
  font-size: 80px;
  color: black;
}

.gitlab-link h3 {
  margin-right: 5px;
  font-size: 50px;
  color: black;
}

.project-section {
  min-height: 160vh;
  padding: 2rem;
}

.bg-blue {
  background-image: url('../assets/Background.jpg');
  background-size: cover;
  background-position: center;
}

.bg-grey {
  background-image: url('../assets/Background2.jpg');
  background-size: cover;
  background-position: center;
}

.discription-container {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.discription-container p {
  margin: 0;
}

h2 {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Almarai_extra', sans-serif;
}

p {
  font-size: 25px;
  margin-bottom: 2rem;
  font-family: 'Almarai_normal', sans-serif;
  text-align: justify;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem;
  transition: transform 0.5s ease-in-out;
  /* Angepasst auf 0.5s */
}

.image-wrapper:hover {
  transform: scale(1.1);
  transition: transform 0.8s ease-in-out;
  /* Angepasst auf 0.8s */
}

.image-wrapper {
  flex-basis: 25%;
  height: 250px;
}

.image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-frame {
  width: 100%;
  height: 100%;
  padding: 10px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.color-white h2,
.color-white .gitlab-link,
.color-white .gitlab-link .fa,
.color-white .gitlab-link h3 {
  color: white;
}

@media (max-width: 1240px) {


  .page-wrapper {
    padding: 1em;
    margin-top: -5em;
  }

  .Heading {
    flex-direction: column;
    align-items: center;
  }

  .gitlab-link {
    position: static;
    margin-top: 1em;
    margin-right: 0;
  }

  .gitlab-link .fa {
    font-size: 40px;
  }

  .gitlab-link h3 {
    font-size: 30px;
  }

  .project-section {
    min-height: auto;
  }

  .discription-container {
    padding: 1rem;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 18px;
    margin-bottom: 1rem;
    text-align: left;
  }

  .image-container {
    gap: 2rem;
  }

  .image-wrapper {
    flex-basis: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
}
</style>