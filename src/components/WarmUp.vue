<template>
    <section class="cerebri-typeface">
        <div class="holder" v-if="mostrarCta">
            <img src="../assets/warmup/whatsapp-main.svg" alt="3C Plus Whatsapp ícone">
            <h3 class="is-size-3">Quer ter acesso antecipado ao Whatsapp da 3C Plus?</h3>
            <p class="block">O Whatsapp da 3C Plus está chegando e você pode entrar para a lista de primeiros usuários</p>
            <button class="button is-link" @click="enviarDados()">Quero ter acesso antecipado</button>
            <span class="tag is-danger is-large block" v-if="mostrarErro">Desculpe, algo deu errado. Por favor, tente novamente mais tarde.</span>
        </div>
        <div class="holder" v-if="mostrarSucesso">
            <img src="../assets/warmup/check-circle.svg" alt="Ícone de sucesso">
            <h3 class="is-size-3 block">Você já está na lista VIP do Whatsapp da 3C Plus</h3>
            <p class="block">Nosso time entrará em contato em breve para mais informações</p>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'WarmUp',
    data() {
        return {
            mostrarCta: true,
            mostrarSucesso: false,
            mostrarErro: false
        }
    },
    methods: {
        enviarDados() {
            const url = 'https://3cvoice.staging.3cplus.com.br/api/v1/user_data/557?api_token=CMi5xqN01dlrSAbm5pKerw7xmSAwF8HGlkwnTypdKMfJgxKocmI5unqK3srh';
            const data = {
            };

            axios.post(url, data)
                .then(response => {
                console.log(response.data);

                this.mostrarCta = false
                this.mostrarSucesso = true
            })
            .catch(error => {
                console.error(error);
                this.mostrarErro = true
            });
        }
    }
};
</script>

<style scoped>
img {
    margin-bottom: 2rem;
}

p {
    margin: .75rem 0 2rem 0;
}
</style>