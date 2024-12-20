const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const adminAuthorization = require('./middleware/adminAuthorization');
const cors = require('cors');

// const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`Hello World!`);
});

const authController = require('./auth/auth.controller');
const itemController = require('./item/item.controller');
const userController = require('./user/user.controller');
const transactionController = require('./transaction/transaction.controller');

app.use('/api/auth', authController);
app.use('/api/items', itemController);
app.use('/api/users', adminAuthorization, userController);
app.use('/api/transactions', transactionController);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;