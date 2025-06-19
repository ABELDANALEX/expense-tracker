const balanceRouter = require('express').Router();
const balanceController = require('../controllers/balanceController')

balanceRouter.get('/:id',balanceController.getBalance)

balanceRouter.patch('/',balanceController.updateBalance)

module.exports=balanceRouter