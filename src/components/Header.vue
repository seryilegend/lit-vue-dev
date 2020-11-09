<template>
    <div>
        <img alt="" src="https://in.lit.msu.ru/static/images/themes/lit2011/logo.png">
        <div class="title">Welcome to lit-vue-dev</div>
        <div class="elements">
            <router-link to="/click_counter"><button class="link">Click counter</button></router-link>
            <router-link to="/example_2"><button class="link">example 2</button></router-link>
            <router-link to="/vuecycle"><button class="link">VueCycle</button></router-link>
            <router-link to="/clock"><button class="link">Clock</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .title {
        text-align: center;
        color: blue;
    }
    .elements {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: aquamarine;
    }
    .link {
        margin-top: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        margin: 10px;
        height: 2rem;
        width: 10rem;
        color: blue;
    }
</style>