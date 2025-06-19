const expenseRouter = require('express').Router()
const expenseController = require('../controllers/expenseController')

expenseRouter.get('/:id',expenseController.getAllExpenses)

expenseRouter.post('/',expenseController.createExpense)

expenseRouter.delete('/:id',expenseController.deleteExpense)

expenseRouter.patch('/:id',expenseController.editExpense)

module.exports = expenseRouter;