import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import MyProjects from '../views/MyProjects.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', component: AboutMe },
  { path: '/projects', component: MyProjects },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
