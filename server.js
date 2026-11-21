const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == '/favicon.ico'){res.end();}
    const myUrl = url.parse(req.url,true);
    console.log(myUrl.pathname);
    if(req.url === '/'){
        fs.appendFile('./log.txt',`${req.method} - Home request\n`,(err)=>{
            if(err){
                console.log(err);
            }
            res.end('Hello from home page');
        });
    }else if(req.url === '/about'){
        fs.appendFile('./log.txt',`$${req.method} - About request\n`,(err)=>{
            if(err){
                console.log(err);
            }
            res.end('Hello from about page');
        });
    }else if(req.url === '/contacts'){
        fs.appendFile('./log.txt',`$${req.method} - Contacts request\n`,(err)=>{
            if(err){
                console.log(err);
            }
            res.end('Hello from contacts page');
        });
    }else{
        fs.appendFile('./log.txt',`${req.method} - Default request\n`,(err)=>{
            if(err){
                console.log(err);
            }
            res.end('Hello from backend server');
        });
    }
});

server.listen(3030,()=>{
    console.log('Server running on port 3030');
})