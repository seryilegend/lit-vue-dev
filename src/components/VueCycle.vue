<template>
    <div class='a' @mouseenter="change_hoverCount()">
        {{ actualText }}
    </div>
</template>

<script>
export default {
    name: 'vuecycle',
    data() {
        return {
            loadingStatus: '',
            hoverCount: 0,
            actualText: '',
        };
    },
    methods: {
        change_hoverCount() {
            return (this.hoverCount ++);
        },
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
        color: aquamarine;
        width: 250px;
        height: 125px;
        display: flex;
        flex-direction: row;
    }
</style>