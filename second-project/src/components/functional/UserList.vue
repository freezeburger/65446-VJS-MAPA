<script setup>
import { useDataStore } from '@/stores/users';
import { computed, onMounted } from 'vue'

const userStore = useDataStore();
console.log(userStore);

const storeIsEmpty = computed(() => userStore.count === 0);
const plural = computed(() => storeIsEmpty.value ? '' : 's');

onMounted(() => {
    userStore.read()
})
</script>

<template>
    <h2>Nombre d'utilisateur{{ plural }}: {{ userStore.count }}</h2>

    <button v-if="storeIsEmpty" @click.once="userStore.read">Charger les utilisateurs.</button>
    <section v-else>
        <div class="user" @click="userStore.select(user)" v-for="user in userStore.users" :key="user.id">
            <!-- {{ user.name }} - {{ user.username }} -->
            {{ user.name + ' - ' + user.username }}
        </div>
    </section>
</template>

<style scoped>
.user {
    padding: 20px;
    cursor: pointer;
    color: var(--mapa-blue);
}

.user:hover {
    background-color: var(--mapa-blue);
    color: white;
}
</style>