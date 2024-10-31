<template>
  <div class="item-card card mb-3">
    <div class="card-body">
    <h3 class="card-title">{{ item.nama }}</h3>
    <p class="card-text">{{ item.deskripsi }}</p>
    <p class="card-text stock">Stok: {{ item.stok }}</p>
    <div class="buttons d-flex gap-2 mt-3">
      <button @click="$emit('edit-item', item)" class="btn btn-success edit">Edit</button>
      <button @click="$emit('delete-item', item.kode)" class="btn btn-danger delete">
        Delete
      </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Gaya untuk judul kartu */
.item-card .card-title {
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
}

/* Gaya untuk teks deskripsi */
.item-card .card-text {
  margin: 5px 0;
  color: #555;
}

/* Gaya khusus untuk teks stock */
.item-card .stock {
  font-weight: bold;
  color: #2c3e50;
}

/* Gaya untuk tombol dengan transisi warna */
.item-card button {
  transition: background-color 0.2s;
}
</style>

