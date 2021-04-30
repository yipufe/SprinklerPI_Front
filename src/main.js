//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import { createRouter, createWebHistory } from 'vue-router'
import ControlBoard from './components/ControlBoard.vue'
import StationSettings from './components/StationSettings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ControlBoard },
        { path: '/station/:stationNumber', component: StationSettings }
    ]
})
const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')