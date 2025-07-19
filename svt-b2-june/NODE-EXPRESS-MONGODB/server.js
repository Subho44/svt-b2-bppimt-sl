const express = require('express');
const productRoutes = require('./routes/productRoutes');
const app = express();
app.use(express.json());

//custom middleware
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use('/api/products',productRoutes);
//base routing
app.get('/',(req,res)=>{
    res.send('welcome rest api');
});
app.get('/about',(req,res)=>{
    res.send('about page');
});
app.get('/contact',(req,res)=>{
    res.send('contact page');
});
app.get('/api',(req,res)=>{
    res.json({message:"api data added"});
});
app.listen(5600,()=>{
    console.log("server is running port 5600");
});

