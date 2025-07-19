const express = require('express');
const router = express.Router();

let products = [
    {id:1, name:'phone'},
    {id:2, name:'Laptop'},
];
//insert
router.post('/',(req,res)=>{
    const newPrdouct = {id:products.length +1, name:req.body.name};
    products.push(newPrdouct);
    res.status(201).json(newPrdouct);
});
//view
router.get('/',(req,res)=>{
    res.json(products);
});
module.exports = router;
