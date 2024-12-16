<script setup>
    import {ref} from 'vue'

    defineEmits(['userFocus'])

    // ref déclare la réactivité de "inputValue"
    let inputValue = ref("Mapa Input");

    setTimeout(() => {
        inputValue.value = "Modified Value"
        console.log(inputValue.value)
    }, 2000);
</script>

<template>

    <input 
        type="text" 
        :value="inputValue" 
        @focus="$emit('userFocus')">
</template>

<style scoped>
</style>

