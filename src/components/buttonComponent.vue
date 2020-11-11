<template>
    <div>
        <button :class="[theme, 'button']" @click="onClick">{{ text }}</button>
    </div>
</template>

<script>
export default {
    name: 'buttonComponent',
    props: {
        theme: String,
        text: String,
        onClick: Function
    }
}
</script>

<style scoped>
    .button {
        border-radius: 1rem;
        cursor: pointer;
        margin: 10px;
        height: 2rem;
        width: 10rem;
    }
    .primary {
        background-color: red;
    }
    .regular {
        background-color: aqua;
    }
</style>