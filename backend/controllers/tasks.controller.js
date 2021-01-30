const Task = require('./../models/task.model')

module.exports = {
    findAll: (req, res) => {
        Task.find()
            .then(tasks => {
                res.json(tasks)
            })
            .catch(err => {
                res.status(500)
                    .json({
                        message: `Some error occurred: ${err.message}`
                    })
            }
            )
    },
    findOne: (req, res) => {
        let id = req.params.taskId
        Task.findById(id)
            .then(task => {
                if (!task) {
                    return res.status(404).json({
                        message: `Task not found with ${id}`
                    })
                }
                res.json(task)
            })
            .catch(err => {
                if (err.kind === "ObjectId") {
                    return res.status(404).json(
                        { message: `Task not found with ${id}` }
                    )
                }
                return res.status(500).json({
                    message: `Some error occurred: ${err.message}`
                })
            })

    },
    create: (req, res) => {
        // Validando se o usuário enviou o titulo
        if (!req.body.title) {
            return res.status(400).json(
                { message: "it was not possible to create a task due to lack of title" }
            )
        }

        // Criando o objeto task

        const task = new Task({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            status: req.body.status,
            category: req.body.category
        })

        //salvando o objeto task no db
        task.save()
            .then(task => res.json(task))
            .catch(err => {
                res.status(500).json(
                    { message: `Some error occurred: ${err.message}` }
                )
            })
    },

    update: (req, res) => {
        if (!req.body.title) {
            return res.status(400).json(
                { message: 'Title can not be empty' }
            )
        }
        Task.findByIdAndUpdate(req.params.taskId, {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            status: req.body.status,
            category: req.body.category

        })
            .then(task => {
                if (!task) {
                    return res.status(404).json(
                        { message: `Task not found with ${req.params.taskId}` }
                    )
                }
                res.json(task)
            })
            .catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).json(
                        { message: `Task not found with ${req.params.taskId}` }
                    )
                }
                return res.status(500).json(
                    { message: `Some error occurred: ${err.message}` }
                )
            })
    },

    delete: (req, res) => {
        Task.findByIdAndDelete(req.params.taskId)
            .then(task => {
                if (!task) {
                    return res.status(404).json(
                        { message: `Task not found with ${req.params.taskId}` }
                    )
                }
                res.json({ message: "task successfully deleted" })

            }
            )
            .catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).json(
                        { message: `Task not found with ${req.params.taskId}` }
                    )
                }
                return res.status(500).json(
                    { message: `Some error occurred: ${err.message}` }
                )
            }
            )
    }


}