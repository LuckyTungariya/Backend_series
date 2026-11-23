const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 3010;

app.get('/api/users',(req,res)=>{     //we should always use /api for request for the developers             //using mobile and server architecture should be always hybrid.
    return res.json(users);
})

app.get('/api/users/:id',(req,res)=>{
    //Here :id => stands for dynamic path parameter means it can change over time.
    const user = req.params.id;
    return res.json(users[user-1]);
})

app.post('/api/users',(req,res)=>{
    console.log(`By default browser make a get request`);
})

app.patch('/api/users/:id',(req,res)=>{
    console.log(`By default browser make a get request`);
})

app.delete('/api/users/:id',(req,res)=>{
    console.log(`By default browser make a get request`);
})

app.listen(port,()=>{console.log(`Server running on port ${port}`)});

//Here we can see that the request /api/users/:id is used again and again so simply we can merge it

app.route('/api/users/:id').get((req,res)=>{
    //Here :id => stands for dynamic path parameter means it can change over time.
    const user = req.params.id;
    return res.json(users[user-1])})
    .patch(console.log(`By default browser make a get request`))
    .delete(console.log(`By default browser make a get request`))