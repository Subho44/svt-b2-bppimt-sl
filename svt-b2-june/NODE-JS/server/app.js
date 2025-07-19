const http = require('http');

const server = http.createServer((req,res)=>{
    const details = {
        name:"subhojit santra",
        age:30,
        profession:"Developer"
    };
   res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(details));
});
server.listen(4300,()=>{
    console.log('server is running port on 4300');
});