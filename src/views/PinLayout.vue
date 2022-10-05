<template>
  <div class="layout">
    <router-link :to="{name: 'pinDetails', params: {id: item.id}}"
        v-for="item in ALL_PINS"
         :key="item.id"
         :class="classes[item.id%classes.length]"
         class="pin"
    >
      <p class="id">{{ item.id }}</p>
      <img :src="item.url" alt="alt">
      <p class="title">{{ item.title }}</p>
    </router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  components: {

  },
  data() {
    return {
      classes: ["xs", "sm", "md", "lg", "xs", "sm", "md", "lg"],
      bottom: false,
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.$store.dispatch('GET_MORE_PINS')
      }
    },
  },
  async mounted() {
    this.$store.dispatch('GET_PINS')
    window.onscroll = () => {
      this.bottom = this.bottomVisible();
    }
  },
  computed: {
    ...mapGetters(['ALL_PINS'])
  },
  methods: {
    bottomVisible() {
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight - 100
      return visible + window.scrollY >= pageHeight
    },
  }
}
</script>
<style lang="sass">
.layout
  width: 100%
  height: 100%
  display: grid
  grid-template-columns: repeat(auto-fill, 250px)
  justify-content: center
.pin
  border-radius: 10px
  margin: 10px
  overflow: hidden
  position: relative
  transition: opacity .3s ease-in-out
  &:hover
    opacity: .5
    cursor: zoom-in
  img
    height: 100%
    max-width: 100%
    object-fit: cover
    display: block
  .title
    position: absolute
    bottom: 10px
    left: 10px
    right: 10px
  .id
    position: absolute
    top: 10px
    left: 10px
.xs
  height: 255px
  grid-row-end: span 26
.sm
  height: 320px
  grid-row-end: span 33
.md
  height: 385px
  grid-row-end: span 45
.lg
  height: 440px
  grid-row-end: span 51

</style>
