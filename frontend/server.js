const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('tasks/index')
})

app.listen(3000,function(){
    console.log("the server is starding")
})