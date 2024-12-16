<script setup>

const props = defineProps(['color']);

</script>

<template>
    <button :class="props.color">Mapa Button - {{props.color}}</button>
</template>

<style scoped>
button{
    transform: scale(1);
    padding:5px;
    color:white;
    border-radius: 2.5px;
    margin:5px;
    border: none;
    transition: transform .3s ease;
}
button:hover{
    transform: scale(1.1); 
}
button:active{
    transform: scale(0.8); 
}
.blue{
    background-color:blue
}
.red{
    background-color:red
}
.green{
    background-color:green
}
</style>

