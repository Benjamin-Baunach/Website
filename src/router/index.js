import { createWebHistory, createRouter } from "vue-router";
//import Home from "../component/Home.vue";
import Home from "../components/Home.vue" 
import About from "../components/About.vue"
import Contact from "../components/Contact.vue"
import Projects from "../components/Projects.vue"


const routes = [
  {
    path: "/Website",
    name: "Home-Page",
    component: Home,
  },
  {
    path: "/about",
    name: "About-Page",
    component: About,
  }, 
  {
    path: "/contact",
    name: "Contact-Page",
    component: Contact,
  },
  {
    path: "/projects",
    name: "Projects-Page",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;