<template>
    <div class="wrapper">
        <router-link to='/'><button class="link">Header</button></router-link>
        <buttonComponent :text="vis ? 'Скрыть список' : 'Показать список'" :theme="vis ? 'primary' : 'regular'" :onClick="() => vis = !vis" />
        <listComponent v-if="vis" :param="objects" />
    </div>
</template>

<script>
import buttonComponent from './buttonComponent'
import listComponent from './listComponent'
export default {
    name: 'example_2',
    components: {buttonComponent, listComponent},
    data() {
        return {
            vis: true,
            objects: [
                {title: 'Big thangs', description: 'sure enough'},
                {title: 'Theres a monster', description: 'coming from the forest'},
                {title: 'Sheep', description: 'gang glorious'},
                {title: 'Run thru the city', description: 'with a message for it'}
            ]
        }
    }
}
</script>

<style scoped>
    .wrapper {
        margin-top: 100px;
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