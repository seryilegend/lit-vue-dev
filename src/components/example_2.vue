<template>
    <div>
        <div class='a'>→Everything is temporary←</div>
        <div class="b"><router-link to='/'>Header</router-link></div>
        <img src="https://clippz.ru/images/imagine-dragons-birds_w350r42f/50.jpg">
    </div>
</template>

<script>
export default {
    name: 'example_2'
}
</script>

<style scoped>
    .a {
        text-align: center;
        color: midnightblue;
        background-color: pink;
    }
    .b {
        margin-top: 10px;
        background-color: aqua;
    }
</style>