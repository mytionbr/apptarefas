const express = require('express')
const router = express.Router()

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

router.get('/', (req, res) => {
    res.json(tasks)
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)

    let task = tasks.find(task => task._id === id)
    console.log(task)
    if (task) res.json(task)
    else res.json({ message: "object not found" })

})

router.post('/', (req, res) => {
    let task = req.body

    tasks.push(task)
    res.json(task)
})

router.put('/:id', (req, res) => {
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
})

router.delete("/:id",(req,res)=>{
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
})



module.exports = router