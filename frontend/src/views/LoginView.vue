<template>
    <div>
        <div>
          <h2>Login</h2>
        </div>
        <form @submit.prevent="login">
          <div>
            <label for="role">Role</label>
            <select v-model="role" id="role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      role: "admin",
    };
  },
  methods: {
    login() {
      localStorage.setItem("auth", true);
      localStorage.setItem("role", this.role);
      this.$router.push({ name: this.role, params: { component: "items" } });
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #4b3f6b;
}

form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

form div {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  color: #4b3f6b;
}

select {
  width: 100%;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
}

button {
  width: 100%;
  padding: 10px 0;
  background-color: #4b3f6b;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #6b5bb8;
}
</style>
