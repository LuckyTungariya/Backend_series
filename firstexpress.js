const express = require('express');

const app = express();

app.get('/signup',(req,res)=>{
    return res.send('Signup form fetched and name is' + req.query.name);
})

app.post('/signup',(req,res)=>{
    return res.send('Siup form loaded');
})

app.listen(3000,()=>{
    console.log('Server running on port 3000');
})

// ^5.3.0 => Versioning ...basically the 0 means minor fix , 3 means recommended fix and 5 
// major fix
//^ => This symbol means lock major changes for ex : ^4.18.2
//~ => This symbol means lock recommended changes for ex : ~4.18.2

//To install a specific version in that case ...command is npm install express@4.18.2