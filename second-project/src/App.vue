<script setup>
import { RouterView } from 'vue-router'

import MapaHeader from '@/components/presentation/MapaHeader.vue'
import MapaNavigation from '@/components/functional/MapaNavigation.vue'

const currentHeaderComponent = MapaNavigation;
</script>

<template>

  <MapaHeader>
    <!-- <MapaNavigation /> -->
    <component :is="currentHeaderComponent" />
  </MapaHeader>


  <RouterView />

</template>

<style scoped></style>
