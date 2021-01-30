const express = require('express')
const taskController = require('../controllers/tasks.controller')
const router = express.Router()


router.get('/', taskController.findAll)

router.get('/:id', taskController.findOne)

router.post('/', taskController.create)

router.put('/:id', taskController.update)

router.delete("/:id",taskController.delete)



module.exports = router