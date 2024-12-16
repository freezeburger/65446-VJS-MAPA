<script setup>
import MapaHeader from '@mapa/MapaHeader.vue'
import MapaMain from '@mapa/MapaMain.vue'
import MapaFooter from '@mapa/MapaFooter.vue'
</script>

<script>
console.groupCollapsed('Test des option de console')
console.log('Application Component')
console.warn('Application Component')
console.error('Application Component')
console.groupEnd()
</script>


<template>
  
  <MapaHeader></MapaHeader>
  
  <Suspense>
    <MapaMain></MapaMain>
  </Suspense>

  <MapaFooter></MapaFooter>
  
</template>

<style scoped>
</style>
