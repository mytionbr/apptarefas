
let tasks = [
    {
        "_id": 1,
        "title": "Afazeres",
        "description": "ssdfsdf",
        "date": "10/01/2021",
        "status": "done",
        "categoria": "school"
    },
    {
        "_id": 2,
        "title": "Realizar trabalho da faculdade",
        "description": "ssdfsdf",
        "date": "10/01/2021",
        "status": "done",
        "categoria": "school"
    }
]

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
        let task = req.body
    
        tasks.push(task)
        res.json(task)
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