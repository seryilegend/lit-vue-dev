<template>
    <div>
        <img alt="lit logo" src="https://in.lit.msu.ru/static/images/themes/lit2011/logo.png">
        <div class = 'a'>Welcome to lit-vue-dev</div>
        <div class="b">
            <div class="c"><router-link to='/example_1'>example_1</router-link></div>
            <div class="c"><router-link to='/example_2'>example_2</router-link></div>
            <div class="c"><router-link to='/vuecycle'>VueCycle</router-link></div>
            <div class="c"><router-link to='/timer'>timer</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .a {
        text-align: center;
        color: blue;
    }
    .b {
        display: flex;
        flex-direction: column;
        background-color: aquamarine;
    }
    .c {
        margin-top: 10px;
        background-color: white;
    }
</style>