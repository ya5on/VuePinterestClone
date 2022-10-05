<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '../src/components/Nav.vue'
</script>

<template>
  <Nav />
  <RouterView :key="$route.path"/>
</template>

<style scoped lang="sass">

</style>
