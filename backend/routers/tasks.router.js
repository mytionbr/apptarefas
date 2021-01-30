const express = require('express')
const taskController = require('../controllers/tasks.controller')
const router = express.Router()


router.get('/', taskController.findAll)

router.get('/:taskId', taskController.findOne)

router.post('/', taskController.create)

router.put('/:taskId', taskController.update)

router.delete("/:id",taskController.delete)



module.exports = router