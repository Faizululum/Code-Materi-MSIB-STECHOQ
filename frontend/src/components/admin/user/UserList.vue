<template>
  <div class="user-list">
    <div class="header">
      <h2>Daftar Pengguna</h2>
      <button class="add-btn" @click="showAddForm">Tambah Pengguna</button>
    </div>

    <div class="user-cards">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        @edit-user="editUser"
        @delete-user="deleteUser"
      />
    </div>

    <Modal :visible="showForm" @close="cancelEditForm">
      <UserForm
        :user="selectedUser"
        :isEdit="isEdit"
        @submit="handleSubmit"
        @cancel="cancelEditForm"
      />
    </Modal>
  </div>
</template>

<script>
import UserCard from "@/components/admin/user/UserCard.vue";
import Modal from "@/components/Modal.vue";
import UserForm from "@/components/admin/user/UserForm.vue";

export default {
  components: {
    UserCard,
    Modal,
    UserForm,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          username: "Faizul",
          email: "Faizul25@example.com",
          role: "ADMIN",
        },
        {
          id: 2,
          username: "Ulum",
          email: "faiz@example.com",
          role: "USER",
        },
      ],
      showForm: false,
      selectedUser: null,
      isEdit: false,
    };
  },
  methods: {
    showAddForm() {
      this.selectedUser = { username: "", email: "", role: "USER" };
      this.isEdit = false;
      this.showForm = true;
    },
    editUser(user) {
      this.selectedUser = { ...user };
      this.isEdit = true;
      this.showForm = true;
    },
    handleSubmit(user) {
      if (user.username && user.email && user.role) {
        if (this.isEdit) {
          const index = this.users.findIndex((u) => u.id === user.id);
          this.users[index] = user;
        } else {
          user.id = this.users.length + 1; // Menetapkan ID baru
          this.users.push(user);
        }
      }
      this.showForm = false;
    },
    cancelEditForm() {
      this.showForm = false;
    },
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
  },
};
</script>

<style scoped>
.user-list {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

h2 {
  color: #4b3f6b;
  font-size: 24px;
}

.add-btn {
  background-color: #754bc5;
  color: white;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.add-btn:hover {
  background-color: #5a37a0;
}
</style>