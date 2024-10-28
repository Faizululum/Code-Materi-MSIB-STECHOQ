<template>
    <div class="transaction-list">
        <div class="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Kode</th>
                        <th>Nama Barang</th>
                        <th>Nama User</th>
                        <th>Tanggal Pinjam</th>
                        <th>Jumlah Pinjam</th>
                        <th>Tanggal Kembali</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="transaction in transactions" :key="transaction.kode">
                        <td>{{ transaction.kode }}</td>
                        <td>{{ transaction.namaUser }}</td>
                        <td>{{ transaction.namaBarang }}</td>
                        <td>{{ transaction.tanggalPinjam }}</td>
                        <td>{{ transaction.jumlahPinjam }}</td>
                        <td>{{ transaction.tanggalKembali }}</td>
                        <td>{{ transaction.status }}</td>
                        <td class="action-buttons">
                            <button class="return-btn" @click="openReturnForm(transaction)" :disabled="transaction.status === 'Kembali'">
                                {{ transaction.status === 'Kembali' ? 'Dikembalikan' : 'Kembalikan' }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Modal :visible="showForm" @close="cancelReturnForm">
            <TransactionForm @submit="handleReturn" @cancel="cancelReturnForm" :transaction="selectedTransaction" />
        </Modal>
    </div>
</template>

<script>
import TransactionForm from "./TransactionForm.vue";
import Modal from "@/components/Modal.vue";

export default {
    components: {
        TransactionForm,
        Modal,
    },
    data() {
        return {
            transactions: [
                {
                    kode: "2024001",
                    namaUser: "John Doe",
                    namaBarang: "Acer Nitro 15 AN515-58",
                    tanggalPinjam: "2022-01-01",
                    tanggalKembali: "2022-01-02",
                    jumlahPinjam: 80,
                    status: "Dipinjam",
                },

                {
                    kode: "2024002",
                    namaUser: "John Doe",
                    namaBarang: "Lenovo LOQ 15 15IRH8",
                    tanggalPinjam: "2022-01-03",
                    tanggalKembali: "2022-01-04",
                    jumlahPinjam: 80,
                    status: "Dipinjam",
                },
            ],
            showForm: false,
            selectedTransaction: null,
        };
    },
    methods: {
        openReturnForm(transaction) {
            this.selectedTransaction = {...transaction};
            this.showForm = true;
        },
        handleReturn(transaction) {
            const index = this.transactions.findIndex(t => t.kode === updatedTransaction.kode);
            if(index !== -1) {
                this.transactions[index] = {...updatedTransaction, status: "Returned"};
            }
            this.cancelReturnForm();
        },
        cancelReturnForm() {
            this.showForm = false;
            this.selectedTransaction = null;
        },
    },
};
</script>

<style scoped>
.transaction-list {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  margin-bottom: 20px;
  color: #4b3f6b;
  text-align: center;
  font-size: 24px;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
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
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.return-btn {
  background-color: #754bc5;
  color: white;
}

.return-btn:hover {
  background-color: #5a37a0;
}

.return-btn[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

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
}
</style>