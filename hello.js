const math = require('./math');
const fs = require('fs');

// console.log('The value of addition is' + math.add(2,3))
// console.log('The value of division is' + math.mul(456 ,765))
// console.log('The additon of three numbers is' + math.addThreeVals(1,2,3))

// fs.writeFileSync('./contacts.txt','Name : Lucky Phone : +91 9152130262');  //Synchronous call...Blocking    
// fs.writeFile('./contacts.txt','Hello from Lucky Backend Developer',(err) => console.log(err));...Non Blocking 

// const result = fs.readFileSync('./contacts.txt','utf8');  //Ready Synchronously
// console.log(result)

// fs.readFile('./hello.txt','utf-8',(err,success)=>{        //Ready Asynchrousouly
//     if(err){
//         console.log(err);
//     }else{
//         console.log(success);
//     }
// })

// fs.appendFileSync('./contacts.txt','\nHello from Gautam Frontent Developer');
// fs.appendFile('./contacts.txt','\nHello from Chinu Full Stack Developer',(err)=>console.log(err));

// fs.unlinkSync('./hello.txt') // Delete a file synchronously

// fs.cpSync('./contacts.txt','./copied.txt'); //Copies content of one file into another file

// console.log('1');

// fs.readFile('./contacts.txt','utf-8',(err,success)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(success);
//     }
// })

// console.log('2');
