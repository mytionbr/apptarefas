const express = require('express')
const routers = require('./routers/tasks')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/blog',
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(()=>console.log('database connected'))

app.use('/tasks', routers)

app.listen(3000,()=>console.log('server started'))