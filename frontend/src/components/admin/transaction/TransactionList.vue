<template>
  <div class="transaction-list">
    <div class="header">
      <h2>Daftar Transaksi</h2>
      <button class="add-btn" @click="$emit('add-transaction')">
        Tambah Transaksi
      </button>
    </div>
    <div class="table-responsive"></div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Karyawan</th>
          <th>Nama Barang</th>
          <th>Jumlah Pinjam</th>
          <th>Tanggal Pinjam</th>
          <th>Tanggal Kembali</th>
          <th>Status</th>
          <th class="action-column">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.kode }}</td>
          <td>{{ transaction.namaKaryawan }}</td>
          <td>{{ transaction.namaBarang }}</td>
          <td>{{ transaction.jumlahPinjam }}</td>
          <td>{{ transaction.tanggalPinjam }}</td>
          <td>{{ transaction.tanggalKembali }}</td>
          <td>{{ transaction.status }}</td>
          <td class="action-buttons">
            <button
              class="verif-btn"
              @click="verifikasi(transaction)"
              :disabled="transaction.status === 'Retutrned'"
            >
              {{
                transaction.status === "Retutrned" ? "Returned" : "Verifikasi"
              }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          kode: 1,
          namaKaryawan: "Faiz",
          namaBarang: "Acer Nitro 15 AN515-58",
          jumlahPinjam: 20,
          tanggalPinjam: "2024-8-10",
          tanggalKembali: "2024-8-17",
          status: "Borrowed",
        },

        {
          kode: 2,
          namaKaryawan: "Fafa",
          namaBarang: "Lenovo LOQ 15 15IRH8",
          jumlahPinjam: 10,
          tanggalPinjam: "2022-02-10",
          tanggalKembali: "2022-03-01",
          status: "Verified",
        },
      ],
    };
  },

  methods: {
    verifikasi(transaction) {
      this.transactions = this.transactions.map((item) => {
        if (item.id === transaction.id) {
          item.status = "Retutrned";
        }
        return item;
      });
    },
  },
};
</script>

<style scoped>
.transaction-list {
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

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
  vertical-align: middle;
}

th {
  background-color: #4b3f6b;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

button {
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.verif-btn {
  background-color: #4caf50;
  color: white;
}

.verif-btn:hover {
  background-color: #45a049;
}

.verif-btn[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Media query untuk responsif */
@media (max-width: 600px) {
  th,
  td {
    padding: 8px 10px;
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .action-buttons button {
    margin: 5px 0;
  }
}
</style>
