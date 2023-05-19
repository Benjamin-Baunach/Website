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
          <p>{{ project.description }}</p>
        </div>
        <div class="image-container">
          <div v-for="(image, index) in project.images" :key="index" class="image-wrapper">
            <div class="image-box">
              <div class="image-frame">
                <img :src="image" :alt="`Project ${project.title} image ${index}`" class="project-image">
              </div>
            </div>
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
import win from "../assets/Projekt-2d-Spiel/Spiel-Start.png"

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


      projects: [
        {
          title: 'Smarte Kasse',
          description: `Willkommen zu einem meiner spannendsten Projekte - einem digitalen Kaffeemanagementsystem, entwickelt für die "pep.digital GmbH" und Steinbeis. Dieses System revolutioniert die Art und Weise, 
                      'wie Unternehmen ihren Kaffeeverbrauch verwalten, indem es innovative Technologien mit Benutzerfreundlichkeit verbindet. Unser Team nutzte React, eine leistungsstarke Bibliothek zur Erstellung 
                      webbasierter Benutzeroberflächen, und entwickelte eine robuste API mit Node und Express. Zur Verwaltung unserer Daten haben wir MySQL, ein bewährtes Open-Source-SQL-Datenbankmanagementsystem, verwendet. 
                      Für maximale Zuverlässigkeit und einfache Bereitstellung haben wir unsere Anwendung in Docker-Containern isoliert. Einzigartig an diesem Projekt ist die Verwendung der RFID-Technologie und eines Raspberry Pi-Terminals. 
                      Durch die Integration eines Touchscreens und eines RFID-Scanners haben wir eine intuitive und benutzerfreundliche Schnittstelle geschaffen, die den Kaffeebezug für die Mitarbeiter einfacher und spaßiger macht als je zuvor.
                      Das Projektmanagement war ein zentraler Aspekt bei der Realisierung dieses Projekts. Mit Hilfe von GitLab und agilen Methoden konnten wir effizient zusammenarbeiten, Herausforderungen meistern und das Projekt erfolgreich zum Abschluss bringen.
                      Dieses digitale Kaffeemanagementsystem repräsentiert meine Leidenschaft für kreative Problemlösungen und die Anwendung modernster Technologien. Entdecken Sie die Details und lassen Sie sich von der Technik hinter dem Spaß am Kaffee begeistern.`,
          images: [landingPage, raspberry, endProduct],
          gitlab: true,
          link: "https://gitlab.com/benjaminbaunach16/smartekasse.git"
        },
        {
          title: "Keyman",
          description: `"Keyman" war ein Projekt, das im Rahmen eines Hochschulmoduls entwickelt wurde. Das Hauptziel bestand darin, eine robuste Softwarearchitektur aufzubauen, die eine effiziente Verwaltung von Schlüsseldaten ermöglichte. Das Projekt umfasste 
          sowohl die Entwicklung des Frontends mit React als auch des Backends mit ORM (Object-Relational Mapping) und REST JaxRS. 
          Im Frontend wurde React verwendet, eine leistungsstarke JavaScript-Bibliothek zur Erstellung von benutzerfreundlichen Webanwendungen. Durch die Verwendung von React konnten wir eine reaktive Benutzeroberfläche entwickeln, die eine nahtlose Interaktion mit den Schlüsseldaten ermöglichte. 
          Das Frontend wurde mit modernen UI-Komponenten und einer intuitiven Benutzeroberfläche gestaltet, um eine angenehme Benutzererfahrung zu gewährleisten. Das Backend wurde mit ORM (Object-Relational Mapping) entwickelt, was eine effiziente Datenbankinteraktion ermöglichte. 
          ORM erleichtert die Kommunikation zwischen der Anwendung und der Datenbank, indem es den Entwicklern ermöglicht, auf objektorientierte Weise auf die Daten zuzugreifen, anstatt direkt mit SQL-Abfragen arbeiten zu müssen. Dadurch konnten wir eine robuste und wartbare Datenzugriffsschicht erstellen.
          Zusätzlich wurde für die Implementierung der API das REST JaxRS-Framework verwendet. REST steht für Representational State Transfer und ist ein Architekturstil, der es ermöglicht, Webdienste über das HTTP-Protokoll bereitzustellen. JaxRS ist eine Java-Spezifikation für die Entwicklung von RESTful Web Services. 
          Die Verwendung von REST JaxRS erleichterte die Erstellung einer gut strukturierten und skalierbaren API, die es ermöglichte, Schlüsseldaten über HTTP-Endpunkte abzurufen, zu erstellen, zu aktualisieren und zu löschen.
          Das Projekt "Keyman" stellte eine Herausforderung dar, bei der wir unsere Fähigkeiten im Bereich der Softwarearchitektur, des Frontend- und Backend-Entwicklungsprozesses sowie der Datenbankinteraktion weiterentwickeln konnten. 
          Durch die Kombination von React, ORM und REST JaxRS konnten wir eine vollständige Lösung für die Verwaltung von Schlüsseldaten entwickeln, die den Anforderungen des Hochschulmoduls gerecht wurde und gleichzeitig praktische Erfahrungen in der Umsetzung einer umfangreichen Softwarearchitektur bo`,
          images: [customerPage, customerDetailPage, contractsPage, contractsDetailPage, userPage, userManagePage, userProfilePage ],
          gitlab: true,
          link: "https://gitlab.com/benjaminbaunach16/keyman.git"
        },
        {
          title: "2D Minigolf Spiel",
          images: [spielStart, shoot, shoot2, win],
          description: `Das "2D Minigolf Spiel" ist ein unterhaltsames Projekt, das ein klassisches Minigolfspiel in 2D für Tablets umsetzt. Es wurde speziell für Touchscreen-Geräte entwickelt, um eine intuitive und benutzerfreundliche Spielerfahrung zu bieten.
                        Das Spiel nutzt JavaScript und die Canvas-API, um die Touchscreen-Funktionalität zu integrieren. Spielerinnen und Spieler können den Schlagwinkel und die Schlagstärke durch einfaches Wischen auf dem Bildschirm steuern. Durch die Implementierung von Touchevents wird eine natürliche 
                        und reaktionsschnelle Interaktion ermöglicht, die ein authentisches Minigolf-Erlebnis auf dem Tablet bietet.
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
          description: `"Photoshop und Illustrator" umfassen meine Projekte, die im Rahmen einer Hochschularbeit entwickelt wurden. Bei diesen Projekten lag der Fokus auf der Anwendung von Photoshop und Illustrator, um kreative visuelle Werke zu gestalten.
                        In Photoshop wurden verschiedene Techniken wie Überlagerungen, Pinselwerkzeuge, Freistellen und Schatten verwendet, um beeindruckende visuelle Effekte zu erzeugen. Durch die geschickte Anwendung dieser Werkzeuge konnte ich die Bilder
                        manipulieren und sie in einzigartige Kunstwerke verwandeln. Die kreative Nutzung der Funktionen von Photoshop ermöglichte es mir, meine künstlerische Vision zum Leben zu erwecken und faszinierende visuelle Kompositionen zu erstellen. 
                        In Illustrator konzentrierte ich mich auf die Gestaltung mit Schriftarten. Hierbei wurden bestimmte Schriftarten gezielt eingesetzt, um typografische Elemente zu gestalten und zu betonen. Durch die Auswahl und Anpassung von Schriftarten
                        konnte ich visuell ansprechende Designs und Layouts erstellen, die Aufmerksamkeit erregen und eine klare Botschaft vermitteln.
                        Die Projekte mit Photoshop und Illustrator ermöglichten es mir, mein kreatives Potenzial auszuschöpfen und praktische Erfahrungen im Umgang mit professionellen Grafikdesign-Tools zu sammeln. Die Fähigkeit, Bilder zu bearbeiten, künstlerische Effekte zu erzielen und Schriftarten gezielt einzusetzen, 
                        sind wertvolle Fähigkeiten, die ich während dieser Hochschularbeit weiterentwickeln konnte.
                        Die Projekte demonstrieren meine Fähigkeiten im Umgang mit den leistungsstarken Werkzeugen von Photoshop und Illustrator und bieten einen Einblick in meine gestalterische Herangehensweise. Ich bin stolz darauf, diese Arbeiten zu präsentieren und freue mich darauf, 
                        meine Kenntnisse und Fähigkeiten in der Zukunft weiter auszubauen und neue fesselnde Projekte zu kreieren.`,
        },       
        {
          title: "Blender",
          images: [ kopfhörer, birnen, affen,  bildschirme, würfel, ],
          description: `Willkommen zu meinen Blender-Projekten! Ich freue mich, meine ersten Projekte mit dir zu teilen, die mir geholfen haben, die Grundlagen der 3D-Modellierung und Animation in Blender zu erlernen.
                      Diese Projekte waren eine spannende Reise, bei der ich mich intensiv mit den verschiedenen Funktionen und Werkzeugen von Blender vertraut gemacht habe. Sie dienten als Grundlage, um mein Verständnis für die Erstellung von Modellen, Texturen und Animationen zu erweitern.
                      Jedes Projekt repräsentiert eine Herausforderung, bei der ich meine Fähigkeiten verbessern konnte. Es war eine großartige Gelegenheit, meine kreative Vision zum Leben zu erwecken und mich mit den Grundlagen der 3D-Kunst vertraut zu machen.
                      Ich hoffe, dass dir meine ersten Blender-Projekte einen Einblick in meine Reise und meinen Fortschritt geben. Ich bin stolz darauf, diese Arbeiten zu präsentieren und freue mich darauf, in Zukunft noch weiter zu wachsen und neue faszinierende Projekte zu schaffen.`,
        },        
        {
          title: "3ds Max",
          images: [axt, bottle ],
          description: `Das Projekt "3ds Max" war Teil eines Hochschulmoduls, das sich mit den Grundlagen der 3D-Modellierung und -Animation mit 3ds Max befasste. Im Rahmen dieses Projekts wurden verschiedene Techniken und Funktionen von 3ds Max erkundet und angewendet. 
                        Ein Beispielprojekt innerhalb dieses Moduls war die Erstellung einer Axt. Dabei wurden verschiedene Aspekte der Modellierungstechniken verwendet, wie zum Beispiel das Skalieren von Vertices, das Formen von Polygonen und das Erstellen von Details. Durch die Anwendung dieser Techniken konnten wir eine realistische Darstellung einer Axt erzeugen.
                        Während des Projekts wurden auch andere Funktionen von 3ds Max erkundet, wie das Anwenden von Texturen und Materialien, die Einstellung von Beleuchtung und Schatten sowie die Animation von Objekten. Diese Grundlagen ermöglichten uns einen umfassenden Einblick in die 3D-Modellierung mit 3ds Max.
                      Das Projekt "3ds Max" bot uns die Möglichkeit, unsere Kenntnisse und Fähigkeiten in der 3D-Modellierung zu erweitern und praktische Erfahrungen mit einer professionellen Software wie 3ds Max zu sammeln. Es war ein spannendes Projekt, das uns half, ein solides Fundament für weitere 3D-Projekte aufzubauen und unser Verständnis für die 3D-Welt zu vertiefen.`,
        },     
      ],
    };
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
  min-height: 140vh;
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
  gap: 5rem;
  transition: transform 0.5s ease-in-out;
  /* Angepasst auf 0.5s */
}

.image-wrapper:hover {
  transform: scale(1.5);
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
</style>