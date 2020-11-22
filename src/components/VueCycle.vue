<template>
    <div class="b">
        <div class="c"><router-link to='/'>Header</router-link></div>
        <div class='a' @mouseenter="change_hoverCount()" @mouseleave="change_actualText()"><h1>{{ actualText }}</h1><p>Мышь наводилась {{ hoverCount }} раз</p></div>
        <div class="div"><button class="button" v-if="updt==true" v-on:click="update()">Обнулить счетчик</button></div>
    </div>
</template>

<script>
export default {
    name: 'vuecycle',
    data() {
        return {
            loadingStatus: '',
            hoverCount: 0,
            actualText: 'Мышь не наведена',
            updt: false,
        };
    },
    methods: {
        change_hoverCount() {
            return (this.hoverCount ++, this.actualText='Мышь наведена', this.updt=true);
        },
        change_actualText() {
            return (this.actualText = 'Мышь не наведена');
        },
        update() {
            return (this.updt=false, this.hoverCount=0)
        }
    },
    beforeCreate() {
        this.loadingStatus='beforeCreate';
        console.log(this.loadingStatus)
    },
    created() {
        this.loadingStatus='created';
        console.log(this.loadingStatus)
    },
    beforeMount() {
        this.loadingStatus='beforeMount';
        console.log(this.loadingStatus)
    },
    mounted() {
        this.loadingStatus='mounted';
        console.log(this.loadingStatus)
    },
    beforeUpdate() {
        this.loadingStatus='beforeUpdate';
        console.log(this.loadingStatus)
    },
    updated() {
        this.loadingStatus='updated';
        console.log(this.loadingStatus)
    },
    beforeDestroy() {
        this.loadingStatus='beforeDestroy';
        console.log(this.loadingStatus)
    },
    destroyed() {
        this.loadingStatus='destroyed';
        console.log(this.loadingStatus)
    }
}
</script>

<style lang="scss" scoped>
$color: aqua;
    .a {
        margin: auto;
        margin-top: 20%;
        background-color: $color;
        width: 250px;
        height: 200px;
        display: flex;
        flex-direction: column;
    }
    .b {
        display: flex;
        flex-direction: column;
        padding: 10%;
    }
    .c {
        margin-top: 10px;
        background-color: $color;
    }
    .div {
        display: flex;
        justify-content: center;
    }
    .button {
        margin: 5px;
        background-color: $color;
        border-radius: 0.5rem;
        height: 2rem;
        cursor: pointer;
        width: 250px;
    }
</style>