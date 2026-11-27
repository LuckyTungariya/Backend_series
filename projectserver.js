const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 3010;

app.use(express.json()); //For json string objects like react client .
app.use(express.urlencoded({extended : false}));   //It is a middleware function for html form data
// app.use('/api/users/:id',(req,res,next) => {
//     req.userId = req.params.id - 1; //req.params is re-created for each matching route/middleware layer.
//     next();
// });

app.get('/api/users',(req,res)=>{   
    console.log(users)  //we should always use /api for request for the developers             //using mobile and server architecture should be always hybrid.
    return res.status(200).json(users);
})

app.get('/api/users/:id',(req,res)=>{
    //Here :id => stands for dynamic path parameter means it can change over time.
    const user = req.params.id;
    for(let i=0;i<users.length;i++){
        if((user-1) === users[i].id){
            res.setHeader('X-name','Lucky Dev');      //For custom headers always use X at ahead.
            return res.json(users[user-1]);
        }
    }
    return res.status(404).json({status : 'error'});
})

app.post('/api/users', (req,res)=>{
    const data = req.body;
    if(!data || !data.id || !data.first_name || !data.last_name || !data.email || !data.gender || !data.job_title){
        res.status(400).json({status : 'error'});
    }else{
        users.push(data);
        return res.status(201).json({status :'added'});
    }
})

app.patch('/api/users/:id',(req,res)=>{
    const idx = req.params.id;
    const data = req.body;
    users[idx-1] = data;
    return res.json({status :'updated'});
})

app.delete('/api/users/:id',(req,res)=>{
    const idx = req.params.id;
    users.splice(idx,1);
    return res.json({status :'deleted'});
})

app.listen(port,()=>{console.log(`Server running on port ${port}`)});

//Here we can see that the request /api/users/:id is used again and again so simply we can merge it

// app.route('/api/users/:id').get((req,res)=>{
//     //Here :id => stands for dynamic path parameter means it can change over time.
//     const user = req.params.id;
//     return res.json(users[user-1])})
//     .patch(console.log(`By default browser make a get request`))
//     .delete(console.log(`By default browser make a get request`))