const express = require('express')
const confige = require('./confige/confige')

const app = express()
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

const to_doRouter = require('./routs/to-do_routs')
const mongoose = require('mongoose')

mongoose.connect(confige.mongoUrl)
.then(()=>{
    console.log('Подключелись')
})
.catch(()=>{
    console.log('Ошибка')
})
app.use(express.json())
app.use('/',to_doRouter)
app.use('/SetStatus',to_doRouter)
app.use('/update',to_doRouter)

app.listen(3000, ()=>{
    console.log(3000)
})