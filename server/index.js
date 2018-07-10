const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname,'..','src')))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.get('/api',(req,res,next)=>{
    res.send('hey')
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})
