import { createRouter, createWebHistory } from 'vue-router'
import TutorialList from '../views/TutorialList.vue'
import AddTutorial from '../views/AddTutorial.vue'
import EditTutorial from '../views/EditTutorial.vue'

const routes = [
  { path: '/', component: TutorialList },
  { path: '/add', component: AddTutorial },
  { path: '/edit/:id', component: EditTutorial, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})