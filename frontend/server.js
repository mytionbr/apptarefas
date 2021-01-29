const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname + '/views/public'));
// app.get('/', (req,res)=>{
//     res.render('tasks/index')
// })

app.get('/', (req,res)=>{
    res.render('testFront/index.html')
})

app.listen(5000,function(){
    console.log("the server is starding")
})