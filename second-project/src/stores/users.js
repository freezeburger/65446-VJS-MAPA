/* eslint-disable */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('users', {
    state: () => ({
        users: [],
        notification: '',
        selectedUser: null
    }),
    getters: {
        count: (state) => state.users.length
    },
    actions: {
        select(user = null) {
            this.selectedUser = user;
            this.notify(`User Selected - ${user.name}`)
        },
        notify(message = '') {
            this.notification = message;
            setTimeout(() => this.notification = '', 3000);
        },
        async create() { },
        async read() {
            const response = await axios.get('/api/users')
            this.users = response.data;
            this.notify('Liste mise à jour')
        },
        async update(user = null) {
            if (!user) return this.notify('Informations Utilisateur Invalides');

            const response = await axios.put(`/api/users/${user.id}`, user);
            this.selectedUser = null;
            this.notify('Utilisateur mis à jour')
        },
        async delete() { }
    }
})
