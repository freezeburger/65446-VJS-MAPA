<script setup>
import UserList from '@/components/functional/UserList.vue'
import UserUpdate from '@/components/functional/UserUpdate.vue'
</script>

<template>
  <TwoColumnLayout>

    <template #title>Sélectionner un utilisateur dans la liste.</template>

    <template #left>
      <ViewLayout>
        <template #title>Liste des utilisateurs.</template>
        <template #default>
          <UserList />
        </template>
      </ViewLayout>
    </template>

    <template #right>
      <ViewLayout>
        <template #title>Modification</template>
        <template #default>
          <UserUpdate />
        </template>
      </ViewLayout>
    </template>

  </TwoColumnLayout>
</template>