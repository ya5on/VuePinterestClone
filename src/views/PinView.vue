<template>
  <div class="pin">
    <p>{{ pin.id }}</p>
    <img :src="pin.url" alt="alt">
    <p class="title">{{ pin.title }}</p>
  </div>
</template>
<script>
export default {
  name: "PinView",
  data() {
    return {
      pinId: Number.parseInt(this.$route.params.id),
      pin: []
    }
  },
  async mounted() {
    this.pin = this.$store.getters.PIN(this.pinId)
  },
  computed: {},
  methods: {},
}
</script>

<style scoped lang="sass">

</style>
