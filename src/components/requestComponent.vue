<template>
    <div>
        <div>
            <buttonComponent :text="'Картинка кошки'" :theme="'primary'" :onClick="() => catsRequest()" />
            <buttonComponent :text="'Картинка собаки'" :theme="'regular'" :onClick="() => dogRequest()" />
        </div>
        <div>
            <h2>Вы получили:</h2>
            <div>{{ text }}</div>
            <img :v-if="text === ''" :src="this.url" alt="">
        </div>
    </div>
</template>

<script>
import buttonComponent from './buttonComponent'
export default {
    name: 'requestComponent',
    data() {
        return {
            text: 'Вы еще не сделали ни одного запроса.',
            url: ''
        }
    },
    components: {buttonComponent},
    methods: {
        async catsRequest() {
            const response = await fetch('https://aws.random.cat/meow');
            const data = await response.json();
            this.url = data.file;
            this.text = ''
        },
        dogRequest() {
            const response = fetch('https://random.dog/woof.json');
            response
            .then(data => data.json())
            .then(uri => this.url = uri.url)
            .finally(this.text = '')
        }
    }
}
</script>

<style scoped>

</style>