const express = require('express');
const app = express();
const port = 3001;

app.get('/',(req,res)=>{
    res.send("Youre at home")
})

app.get('/about',(req,res)=>{
    res.send('You are at about page')
})

app.listen(port,()=>{
    console.log('Server is running'+port)
})
