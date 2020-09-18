const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static('client'))

app.get("/",function(req,res){
    fs.readFile(__dirname+'/client/index.html',function(err,data){
        res.end(data)
    })
})

app.listen(process.env.PORT|| 5000,function(){
    console.log("the server is starding")
})