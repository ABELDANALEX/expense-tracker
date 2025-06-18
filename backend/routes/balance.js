const balanceRouter = require('express').Router();
const balanceController = require('../controllers/balanceController')

balanceRouter.patch('/',balanceController.updateBalance)

module.exports=balanceRouter