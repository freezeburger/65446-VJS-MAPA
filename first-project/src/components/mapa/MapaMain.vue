<script setup>
import MapaButton from '@mapa/MapaButton.vue'
import MapaInput from '@mapa/MapaInput.vue'

const URL = 'https://jsonplaceholder.typicode.com/users';

const data = await fetch(URL).then(response => response.json());

console.log('DATA');
console.table(data);

const successColor = "green";

/* function handleFocus(){
    alert('handleFocus')
} */

const handleFocus = () =>  {
    console.log('handleFocus')
}
</script>

<template>
    
    Mapa Main
    
    <hr>
    <MapaInput @user-focus="handleFocus"></MapaInput>
    <MapaButton color="blue"></MapaButton>
    <MapaButton color="red"></MapaButton>
    <MapaButton :color="successColor"></MapaButton>

</template>

<style scoped>
</style>

