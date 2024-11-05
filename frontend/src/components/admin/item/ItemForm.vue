<template>
  <div>
    <form @submit.prevent="submitForm" class="mb-3">
      <!-- Kode Barang -->
      <div class="mb-3">
        <label for="kode" class="form-label">Kode Barang</label>
        <input
          type="number"
          v-model="form.kode"
          id="kode"
          class="form-control"
          :disabled="isEdit"
          required
        />
      </div>

      <!-- Nama Barang -->
      <div class="mb-3">
        <label for="nama" class="form-label">Nama Barang</label>
        <input
          type="text"
          v-model="form.nama"
          id="nama"
          class="form-control"
          required
        />
      </div>

      <!-- Deskripsi -->
      <div class="mb-3">
        <label for="deskripsi" class="form-label">Deskripsi</label>
        <input
          type="text"
          v-model="form.deskripsi"
          id="deskripsi"
          class="form-control"
          required
        />
      </div>

      <!-- Stok -->
      <div class="mb-3">
        <label for="stok" class="form-label">Stok</label>
        <input
          type="number"
          v-model="form.stok"
          id="stok"
          class="form-control"
          required
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-success">
        {{ isEdit ? "Simpan Perubahan" : "Tambah Barang" }}
      </button>
    </form>
  </div>
</template>

  

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      form: {
        kode: "",
        nama: "",
        deskripsi: "",
        stok: 0,
      },
    };
  },
  watch: {
    item: {
      immediate: true,
      handler(newItem) {
        if (this.isEdit) {
          this.form = { ...newItem };
        } else {
          this.form = {
            kode: "",
            nama: "",
            deskripsi: "",
            stok: 0,
          };
        }
      },
    },
  },
  methods: {
    submitForm() {
      this.$emit("submit", this.form);
    },
  },

  emits: ["submit"],
};
</script>

<style scoped>
.form {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
}

.mb-3 {
  margin-bottom: 1rem;
}

.form label {
  font-weight: bold;
  color: #4b3f6b;
}

.form-control {
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
}

.form-control:focus {
  border-color: #4b3f6b;
  box-shadow: 0 0 0 0.25rem rgba(75, 63, 107, 0.25);
}

</style>
