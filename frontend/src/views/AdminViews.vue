<template>
  <div class="admin-view">
    <div class="scrollable-content">
      <ItemList
        v-if="currentComponent === 'items'"
        @edit-item="showEditForm"
        @add-item="showAddForm"
      />
      <UserList v-else-if="currentComponent === 'users'" />
      <TransactionList v-else-if="currentComponent === 'transactions'" />
      <div v-else>
          <p>Invalid component: {{ currentComponent }}</p>
        </div>
    </div>
    <Modal
      v-if="showForm"
      :isVisible="showForm"
      @close="cancelEditForm"
      :title="isEdit ? 'Edit Barang' : 'Tambah Barang'"
    >
      <ItemForm :item="selectedItem" :isEdit="isEdit" @submit="handleSubmit" />
    </Modal>
  </div>
</template>

<script>
import ItemList from "@/components/admin/item/ItemList.vue";
import ItemForm from "@/components/admin/item/ItemForm.vue";
import UserList from "@/components/admin/user/UserList.vue";
import TransactionList from "@/components/admin/transaction/TransactionList.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    ItemList,
    ItemForm,
    Modal,
    UserList,
    TransactionList,
  },
  props: {
    currentComponent: {
      type: String,
      default: "users",
    },
  },
  data() {
    return {
      showForm: false,
      selectedItem: null,
      isEdit: false,
    };
  },
  methods: {
    navigateTo(component) {
      this.$router.push({ name: "user", params: { component } });
    },
    showEditForm(item) {
      this.selectedItem = item;
      this.isEdit = true;
      this.showForm = true;
    },
    showAddForm() {
      this.selectedItem = null;
      this.isEdit = false;
      this.showForm = true;
    },
    handleSubmit(formData) {
      this.showForm = false;
      this.selectedItem = null;
      this.isEdit = false;
    },
    cancelEditForm() {
      this.showForm = false;
      this.selectedItem = null;
      this.isEdit = false;
    },
  },
};
</script>

<style scoped>
.admin-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.scrollable-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #ffffff;
  max-height: calc(100vh - 60px);
}
</style>
