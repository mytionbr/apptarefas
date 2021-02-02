const express = require('express')
const routers = require('./routers/tasks.router.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const dbConfig = require('./config/database.config')
const portConfig = require('./config/port.config')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url,
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(()=>console.log('database connected'))
.catch((err)=>console.log(`unable to connect to the database due to: ${err}`))

app.use('/tasks', routers)

app.listen(portConfig.port, portConfig.executionMessage())