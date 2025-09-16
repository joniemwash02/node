const express = require('express');
const app = express();
const logger= require('./logger')
const authorize=require('./authorize')
// app.use([logger,authorize])
var morgan=require('morgan')

app.use(morgan('tiny'))

app.get('/', (req, res)=>{
    res.send('good afternoon')
})
app.get('/about' ,(req, res)=>{
    res.send('about page')
})
app.get('/api/products' ,(req, res)=>{
    res.send('product page')
})
app.get('/api/items' ,(req, res)=>{
    res.send('about page')
})
app.listen(5000, ()=>{
    console.log(' running on http://localhost:5000/')
})