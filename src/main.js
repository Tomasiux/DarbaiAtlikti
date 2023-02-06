import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import './assets/main.css'
import FormChild from './components/views/FormChild.vue'
import HelloWorld from './components/HelloWorld.vue'
import Array from './components/views/Array.vue'

const routes = [
    { path: "/", component: HelloWorld},
    { path: "/Form", component: FormChild},
    { path: "/Array", component: Array},
];

const router =  createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')
