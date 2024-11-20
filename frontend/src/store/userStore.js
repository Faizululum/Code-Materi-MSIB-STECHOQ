import { defineStore } from 'pinia';
import apiClient from '@/plugins/axios';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: [],
    }),
    actions: {
        async fetchUser() {
            try {
                const response = await apiClient.get('/users');
                this.user = response.data;
            } catch (error) {
                console.error("failed to fetch user:", error);
            }
        },
        async addUser(user) {
            try {
                const response = await apiClient.post('/users', user);
                this.user = response.data;
            } catch (error) {
                console.error("failed to add user:", error.message);
            }
        },
        async updateUser(user) {
            try {
                const response = await apiClient.put(`/users/${user.id}`, user);
                const index = this.users.findIndex(u => u.id === user.id);
                if (index !== -1) {
                    this.users.splice(index, 1, response.data);
                }
            } catch (error) {
                console.error("failed to update user:", error);
            }
        },
        async deleteUser(id) {
            try {
                await apiClient.delete(`/users/${id}`);
                this.users = this.users.filter(user => user.id !== id);
            } catch (error) {
                console.error("failed to delete user:", error);
            }
        }
    }
});