<template>
    <div :class="['sidebar', { 'd-none': !isSidebarVisible }]">
        <a class="logo">Simbok</a>
        <ul>
            <li v-if="currentRole === 'admin'">
                <button @click="navigateTo('users')" class="nav-link">
                    <i class="bi bi-house-door"></i> Users
                </button>
            </li>
            <li>
                <button @click="navigateTo('items')" class="nav-link">
                    <i class="bi bi-box"></i> Items
                </button>
            </li>
            <li>
                <button @click="navigateTo('transactions')" class="nav-link">
                    <i class="bi bi-cash"></i> Transactions
                </button>
            </li>
            <li v-if="currentRole === 'user'">
                <button @click="navigateTo('history')" class="nav-link">
                    <i class="bi bi-clock-history"></i> History
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        currentRole: {
            type: String,
            required: true,
        },
        isSidebarVisible: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        navigateTo(component) {
            const baseRoute = this.currentRole === "admin" ? "admin" : "user";
            this.$router.push({ name: baseRoute, params: { component } });
        },
    },
};
</script>

<style scoped>
.sidebar {
    width: 200px;
    background: #4b3f6b;
    color: white;
    padding: 14px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    font-size: 18px;
    font-family: sans-serif;
    transition: transform 0.3s ease;
}

.sidebar.hidden {
    transform: translateX(-100%);
}

.logo {
    font-size: 24px;
    margin-left: -20px;
    margin-bottom: 30px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 20px;
    text-align: center;
}

button, a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
}

button:hover {
    text-decoration: underline;
    background-color: rgba(255, 255, 255, 0.1);
}

button i {
    margin-right: 8px;
}
</style>