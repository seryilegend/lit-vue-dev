<template>
    <div class="wrapper">
        <div><img alt="СЛ logo" width="80" src="https://yt3.ggpht.com/a-/AOh14GjJBBv20OHDSiHlQ9DPLmNVcdpiiBoRRS11zUNLgw=s288-c-k-c0xffffffff-no-rj-mo"></div>
        <a class="link" margin="10px" href="https://www.youtube.com/channel/UCiEHjtGwcor-v710Qp5doSg">Subscribe me on YouTube!</a>
        <router-link to='/'><button class="button">Header</button></router-link>
        <button class="button" @click="incrementCount()">Посчитать клики</button>
        <div>Клики: {{ buttonCount }}</div>
        <button class="button" @click="resetCount()" v-bind:disabled="buttonCount === 0">Обнулить клики</button>
        <div style="margin-top: 20px"><p style="height: 2rem">{{ userPhrase }}</p><input v-model="userPhrase" autofocus></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'click_counter',
    data() {
        return {
            userPhrase: ''
        }
    },
    computed: {
        ...mapGetters(['buttonCount', 'userPhrase']),
    },
    methods: {
        ...mapActions(['changeUserPhrase', 'incrementCount', 'resetCount'])
    },
};
</script>

<style scoped>
    .wrapper {
        display: flex;
        text-align: center;
        flex-direction: column;
        color: red;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }
    .link {
        color: orangered;
    }
    .button {
        margin: 5px;
        background-color: aqua;
        border-radius: 0.5rem;
        height: 2rem;
        cursor: pointer;
    }
</style>