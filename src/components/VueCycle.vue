<template>
    <div class='a' @mouseenter="change_hoverCount()" @mouseleave="change_actualText()"><h1>{{ actualText }}</h1><p>Мышь наводилась {{ hoverCount }} раз</p></div>
</template>

<script>
export default {
    name: 'vuecycle',
    data() {
        return {
            loadingStatus: '',
            hoverCount: 0,
            actualText: 'Мышь не наведена',
        };
    },
    methods: {
        change_hoverCount() {
            return (this.hoverCount ++, this.actualText='Мышь наведена');
        },
        change_actualText() {
            return (this.actualText = 'Мышь не наведена');
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

<style scoped>
    .a {
        margin: auto;
        margin-top: 20%;
        background-color: aquamarine;
        width: 250px;
        height: 200px;
        display: flex;
        flex-direction: column;
    }
</style>