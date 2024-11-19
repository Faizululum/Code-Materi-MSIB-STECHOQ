<template>
  <div class="user-view">
    <div v-if="!showForm">
      <div class="scrollable-content">
        <ItemList
          v-if="currentComponent === 'items'"
          @edit-item="showEditForm"
        />
        <TransactionList
          v-else-if="currentComponent === 'transactions'"
        />
        <HistoryList
          v-else-if="currentComponent === 'history'"
        />
        <div v-else>
          <p>Invalid component: {{ currentComponent }}</p>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="form-container">
      <ItemForm
        @submit="handleSubmit"
        @cancel="cancelEditForm"
        :item="selectedItem"
        :isEdit="isEdit"
      />
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/user/item/ItemList.vue";
import ItemForm from "@/components/user/item/ItemForm.vue";
import TransactionList from "@/components/user/transaction/TransactionList.vue";
import HistoryList from "@/components/user/history/HistoryList.vue";

export default {
  components: {
    ItemList,
    ItemForm,
    TransactionList,
    HistoryList,
  },
  props: {
    currentComponent: {
      type: String,
      default: "items",
    },
  },
  data() {
    return {
      showForm: false,
      selectedItem: null,
      isEdit: false,
    };
  },
  watch: {
    currentComponent(newValue) {
      console.log("Navigated to:", newValue);
    },
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
    }
};
</script>

<style scoped>
.user-view {
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
