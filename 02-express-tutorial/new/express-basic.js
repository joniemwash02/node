const express= require('express')
const app=express();

app.get('/', (req, res)=>{
     res.status(200).send('hello this is home page')
})
app.get('/about', (req, res)=>{
    res.status(200).send('this is about page')
})
app.all('*',(req, res)=>{
    res.status(404).send('<h1>page not found</h1>')
})


app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})

// app.get

//app.post

//app.put

//app.delete

//app.all

