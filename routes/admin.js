
const express = require('express');
const adminController = require('../controllers/expenses');

const router = express.Router();

router.get('/',adminController.getExpensesPage)

router.post('/register', adminController.postRegister);
router.get('/successfullyadded', adminController.getBookingSuccess);

router.get('/expenses', adminController.getExpenses);
   


module.exports = router;