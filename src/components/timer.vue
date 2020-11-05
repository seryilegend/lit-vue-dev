<template>
    <div>
        <h2>Current time:</h2>
        <p>{{ time }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'timer',
  data() {
    return {
      id: undefined,
    }
  },
  computed: {
    ...mapGetters(['time'])
  },
  methods: {

  },
  mounted() {
    this.id = setInterval(() => this.$store.commit('SET_TIME'), 1000)
  },
  beforeDestroy() {
    clearInterval(this.id)
  }
}
</script>

<style scoped>

</style>