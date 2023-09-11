const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const conn = require('./db/conn')
const study = require('./models/study')

const port = 5020

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home')
})

app.post('/study/add', async(req,res)=>{
    const {tema, descri, data, tempo} = req.body
    await study.create({tema, descri, data, tempo})
    return res.redirect('/')
})

app.listen(port,()=>{
    console.log('servidor rodando')
})