<script setup>

import { RouterLink } from 'vue-router'
import { useDataStore } from '@/stores/users';
import { computed } from 'vue'

const userStore = useDataStore();
const noCurrentNotification = computed(() => !userStore.notification);

</script>

<template>
    <Transition mode="out-in">
        <nav v-if="noCurrentNotification">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/user-creation">Creation</RouterLink>
            <RouterLink to="/user-modification">Modification</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
        <div v-else>
            {{ userStore.notification }}
        </div>
    </Transition>
</template>

<style scoped>
.v-enter-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    transform: scale(1.1);
    opacity: 0;
}

div {
    background-color: var(--mapa-red);
    color: white;
    padding: 10px 50px;
    margin: 5px;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--mapa-red);
}

nav a {
    text-decoration: none;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid gray;
    color: var(--mapa-blue);
}

nav a:first-of-type {
    border: 0;
}
</style>