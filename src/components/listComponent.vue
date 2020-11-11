<template>
    <div class="wrapper">
        <table>
            <tr>
                <td>Title</td>
                <td>Description</td>
            </tr>
            <tr v-for="item in param" v-bind:key="[item.title, item.description]">
                <td>{{ item.title }}</td>
                <td>{{ item.description }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'listComponent',
    props: {
        param: Array
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    table {
        border-collapse: collapse;
    }
    th {
        padding: 5px;
        border: 1px solid black;
    }
    td {
        padding: 5px;
        border: 1px solid black;
    }
</style>