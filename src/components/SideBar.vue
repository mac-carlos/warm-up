<template>
    <header>
        <h1 class="has-text-centered">
            <img alt="Logo da 3C Plus" src="../assets/logo.svg">
        </h1>
        <nav>
            <ul>
                <router-link to="/whatsapp" class="is-clickable">
                    <li class="is-flex cerebri-typeface" :class="{ 'active': $route.path === '/whatsapp' }">
                        <img src="../assets/sidebar/whatsapp.svg" alt="">
                        Whatsapp
                    </li>
                </router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideBar',
    setup() {
        
    },
})
</script>

<style>
header {
    background: white;
    width: 100%;
    height: 100vh;
}

h1 {
    padding: 2rem;
}

.active {
    border-left: 5px solid yellow;
}

li {
    color: var(--font-dark);
}

li img {
    margin: 0 10px;
}

@media (max-width: 1024px) {
    header {
        height: auto;
        padding-bottom: 2rem;
    }    
}
</style>