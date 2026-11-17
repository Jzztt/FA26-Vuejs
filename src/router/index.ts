import ConditionalRendering from '@/components/ConditionalRendering.vue'
import DataBinding from '@/components/DataBinding.vue'
import ListRendering from '@/components/ListRendering.vue'
import ReactiveView from '@/components/ReactiveView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/reactive', component: ReactiveView },
  { path: '/data-binding', component:  DataBinding },
  { path: '/conditional-render', component: ConditionalRendering},
  {path:'/list-render',component: ListRendering},
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})