<script setup>
import { useDataStore } from '@/stores/users';

const userStore = useDataStore();

</script>

<template>

    <h1 v-if="!userStore.selectedUser">Pas d'utilisateur sélectionné.</h1>

    <form v-else @submit.prevent="userStore.update(userStore.selectedUser)">
        <h2>{{ userStore.selectedUser?.name }}</h2>

        <input type="text" v-model="userStore.selectedUser.name">
        <input type="text" v-model="userStore.selectedUser.username">

        <button>Udpate</button>
    </form>

</template>

<style scoped></style>