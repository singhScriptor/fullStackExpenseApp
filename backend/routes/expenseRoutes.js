const expense = require('express')
const router = expense.Router()

const controlExpense = require('../controller/expenseController')

router.post('/',controlExpense.postExpense)
router.get('/',controlExpense.getExpense)
router.put('/:id',controlExpense.updateExpense)
router.delete('/:id',controlExpense.deleteExpense)

module.exports = router