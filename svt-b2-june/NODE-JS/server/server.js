const http = require('http');
const url = require('url');
//dummy data product based

const products = [
    {id:1,name:'Laptop',price:67000},
    {id:2,name:'Phone',price:67000},
    {id:3,name:'Tablet',price:67000},
    {id:4,name:'Headphone',price:67000},

];
//create server
const server = http.createServer((req,res)=>{
    const parseurl = url.parse(req.url,true); //true = get query as object
    const path = parseurl.pathname;
    const method = req.method;
    const query = parseurl.query;

    //header file
    res.setHeader('Content-Type','application/json');
    //define routes
    if(method === 'GET' && path ==='/products'){
        //search query string based ?name=productname
        if(query.name) {
            const result = products.filter(p=>
                p.name.toLowerCase().includes(query.name.toLowerCase())
            );
            res.end(JSON.stringify(result));
        }
        else {
            res.end(JSON.stringify(products));
        }
    }
    //dynamic routes(/products/1)
    else if (method ==='GET' && path.startsWith('/products/')){
        const id = parseInt(path.split('/')[2]);
        const product = products.find(p=>p.id === id);
        if(product) {
             res.end(JSON.stringify(product));
        }
        else {
              res.end(JSON.stringify({message:'product not found'}));
        }
    }
    else {
         res.end(JSON.stringify({message:"route is not found"}));
    }
});
//run on port
server.listen(7800,()=>{
    console.log("server is running port 7800");
})