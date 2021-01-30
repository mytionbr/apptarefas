const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String 
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "Not done"
    },
    categoria: {
        type: String
    }
})

module.exports = mongoose.model('Task', TaskSchema)