<template>
  <div id="app">
    <Header
      :currentRole="currentRole"
      @update-role="updateRole"
      @toggle-sidebar="toggleSidebar"
      :isSidebarVisible="isSidebarVisible"
    />
    <div class="app-content">
      <Sidebar
        :currentRole="currentRole"
        :isSidebarVisible="isSidebarVisible"
        @showComponent="navigateTo"
      />
      <div class="main-content" :class="{ expanded: isSidebarVisible }">
        <component
          :is="currentView"
          :currentComponent="currentComponent"
          v-if="currentRole === 'admin'"
          @add-user="handleAddUser"
          @edit-user="handleEditUser"
          @delete-user="handleDeleteUser"
          @add-item="handleAddItem"
          @edit-item="handleEditItem"
          @delete-item="handleDeleteItem"
        />
        <component
          :is="currentView"
          v-else
          :currentComponent="currentComponent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
import AdminViews from "./views/AdminViews.vue";
import UserViews from "./views/UserViews.vue";

export default {
  components: {
    Header,
    Sidebar,
    AdminViews,
    UserViews,
  },
  data() {
    const params = new URLSearchParams(window.location.search);
    return {
      currentRole: params.get("role") || "admin",
      currentComponent: params.get("component") || "items",
      isSidebarVisible: params.get("sidebar") !== "hidden",
    };
  },
  computed: {
    currentView() {
      return this.currentRole === "admin" ? AdminViews : UserViews;
    },
  },

  methods: {
    updateRole(role) {
      this.currentRole = role;
      this.navigateTo("items");
    },

    navigateTo(component) {
      this.currentComponent = component;
      this.updateURLParams();
    },

    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
      this.updateURLParams();
    },

    updateURLParams() {
      const params = new URLSearchParams();
      params.set("role", this.currentRole);
      params.set("component", this.currentComponent);
      params.set("sidebar", this.isSidebarVisible ? "visible" : "hidden");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
      );
    },
  },

  //   handleSearch(newQuery) {
  //     console.log("Search term:", newQuery);

  //     // Implementasi logika pencarian berdasarkan currentRole dan newQuery
  //     if (this.currentRole === "admin") {
  //       console.log("Search in admin items");
  //     } else if (this.currentRole === "user") {
  //       console.log("Search in user items");
  //     }
  //   },
  // },

  // mounted() {
  //   EventBus.on("search", this.handleSearch);
  // },

  // beforeUnmount() {
  //   EventBus.off("search", this.handleSearch);
  // },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  background-color: #4b3f6b;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #4b3f6b;
}

.app-content {
  display: flex;
  flex-grow: 1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font: 1em sans-serif;
  height: calc(100vh - 60px);
  margin-top: 60px;
  background-color: #fff;
}

.main-content {
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}

.main-content.expanded {
  margin-left: 200px;
}

.app-content.noHeader {
  margin-top: 0;
  height: 100vh;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    margin-top: 180px;
  }

  .app-content.noHeader {
    margin-top: 0;
    height: calc(100vh - 60px);
  }
}
</style>
