import { createRouter, createWebHashHistory} from "vue-router";
import WhatsApp from './views/WhatsApp.vue'

const rotas = [
    {
        path: '/',
        redirect: '/whatsapp'
    },
    {
        path: '/whatsapp',
        name: 'WhatsApp',
        component: WhatsApp
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;