const Task = require('./../models/task.model')

module.exports = {
    findAll: (req, res) => {
        res.json(tasks)
    },
    findOne: (req, res) => {
        let id = Number(req.params.id)
    
        let task = tasks.find(task => task._id === id)
        console.log(task)
        if (task) res.json(task)
        else res.json({ message: "object not found" })
    
    },
    create: (req, res) => {
        // Validando se o usuário enviou o titulo
        if(!req.body.title){
            return res.status(400).json(
                {message: "it was not possible to create a task due to lack of title"}
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
                {message: `Some error occurred: ${err.message}`}
            )
        })
    },
    update: (req, res) => {
        let id = Number(req.params.id)
        let taskUpdade = { ...req.body }
        let index
        let task = tasks.find((task, i) => {
            index = i
            return task._id === id
        })
    
        if (task) {
            task = taskUpdade
            tasks[index] = task
            res.json(task)
        }
        else {
            res.json({ message: 'Object not found' })
        }
    },

    delete:(req,res)=>{
        let id = Number(req.params.id)
        let index
        let task = tasks.find((task, i) => {
            index = i
            return task._id === id
        })
        console.log(index)
        if(task){
           tasks.splice(index,1)
           res.json(tasks)
        }
        else{
            res.json({ message: 'Object not found' })
        }
    }

}