<template>
    <div class="wrapper">
        <h2 class="text">Current time:</h2>
        <p class="text bigFont">{{ time }}</p>
        <router-link to='/' class="bigFont blueText"><button class="button bigFont">Header</button></router-link>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'clock',
  data() {
    return {
      id: void 0,
    }
  },
  computed: {
    ...mapGetters(['time'])
  },
  methods: {
    ...mapMutations(['SET_TIME'])
  },
  mounted() {
    this.SET_TIME()
    this.id = setInterval(this.SET_TIME, 1000)
  },
  beforeDestroy() {
    clearInterval(this.id)
  }
}
</script>

<style scoped>
  .wrapper {
    border-radius: 10rem;
    background-color: darkred;
    padding: 10px;
    margin: 150px;
  }
  .text {
    color: white;
  }
  .button {
    height: 3rem;
    width: 9rem;
    border-radius: 1rem;
    cursor: pointer;
    color: blue;
  }
  .bigFont {
    font-size: 2rem;
  }
</style>