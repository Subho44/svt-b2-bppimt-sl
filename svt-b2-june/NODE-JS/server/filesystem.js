const fs = require('fs');
fs.writeFile('data.txt','hello guys how r u?',(err)=>{
    if(err) throw err;
    console.log("file created");
});

//read file
fs.readFile('data.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log("file read",data);
});
//append file
fs.appendFile('data.txt','\n ok all students',(err)=>{
    if(err) throw err;
    console.log("file created and data added");
});