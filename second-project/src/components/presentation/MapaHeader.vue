<script setup>

// import { ref } from 'vue';
import { useRoute } from 'vue-router'

// const pageTitle = ref('PAGE_TITLE');
</script>

<template>
    <div>
        <img src="@/assets/mapa-logo.jpg" alt="Logo Mapa">
        <h1>{{ useRoute().name?.toUpperCase() }}</h1>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<style scoped>
img {
    width: 172px;
    height: 42px;
}

div {
    display: flex;
    box-sizing: border-box;
    padding: 25px;
    width: 100vw;
    height: 110px;
    border-bottom: 10px solid var(--mapa-red);
}

h1 {
    padding-left: 25px;
    color: var(--mapa-blue);
}

@media (max-width: 720px) {
    h1 {
        display: none;
    }
}
</style>