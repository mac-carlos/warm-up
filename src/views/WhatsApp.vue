<template>
    <div class="is-flex is-flex-direction-column is-justify-content-space-between">
        <div class="p-6">
            <h2 class="is-size-3 grotesque-typeface bold "><img src="../assets/title.svg" alt="Whatsapp 3C Plus"></h2>
        </div>
        <div class="columns is-vcentered">
            <!-- Call to Action -->
            <div class="column p-6 is-centered">
                <div class="holder">
                    <WarmUp />
                </div>
            </div>
            <div class="column">
                <img class="mu-img" alt="Mockup WhatsApp 3C Plus" src="../assets/warmup/mockup.svg">
            </div>
            
        </div>
        <footer>
            <img src="../assets/footer.svg" alt="Footer">
        </footer>
    </div>
</template>

<script>
import WarmUp from '../components/WarmUp.vue';

export default {
    name: 'WhatsApp',
    components: { WarmUp },
}
</script>

<style>
.bold {
    font-weight: 500;
}

.mu-img {
    width: 100%;
}

.button {
    background: #3057F2;
    padding: .6875rem 2rem;
    color: white;
    border-radius: .625rem;
}

p {
    font-size: 1.125rem;
    color: var(--gray-text);
}

.view {
    flex: 1 100%;
}
</style>