const express = require('express')
const path = require('path')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
// app.use(express.static(__dirname + '/views/testFront/public/'));
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('views'));


app.get('/', (req,res)=>{
    res.render('./index.html')
})

app.listen(5000,function(){
    console.log("the server is starding")
})