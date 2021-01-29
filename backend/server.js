const express = require('express')
const routers = require('./routers/tasks.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/blog',
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(()=>console.log('database connected'))


app.use('/tasks', routers)

app.listen(3000,()=>console.log('server started'))