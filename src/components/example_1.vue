<template>
    <div class='a'>
        <p class="b"><img alt="СЛ logo" width="80" src="https://yt3.ggpht.com/a-/AOh14GjJBBv20OHDSiHlQ9DPLmNVcdpiiBoRRS11zUNLgw=s288-c-k-c0xffffffff-no-rj-mo"></p>
        <a class="c" margin="10px" href="https://www.youtube.com/channel/UCiEHjtGwcor-v710Qp5doSg">Subscribe me on YouTube!</a>
        <div class="d"><router-link to='/'>Header</router-link></div>
        <button @click="incrementCount()">Посчитать клики</button>
        <div>Клики: {{ buttonCount }}</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'example_1',
    computed: {
        ...mapGetters(['buttonCount', 'userPhrase'])
    },
    methods: {
        ...mapActions(['changeUserPhrase', 'incrementCount'])
    },
};
</script>

<style scoped>
    .a {
        display: flex;
        text-align: center;
        flex-direction: column;
        color: red;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }

    .b {
        text-align: center;
    }

    .c {
        color: orangered;
    }
    .d {
        margin-top: 10px;
        background-color: aqua;
    }
</style>