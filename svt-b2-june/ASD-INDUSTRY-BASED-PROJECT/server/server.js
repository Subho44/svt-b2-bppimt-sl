const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const Dustbin = require("./models/Dustbin");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectdb();
Dustbin();
app.get("/",(req,res)=>{
    res.json({message:"Api is working"});
});
const PORT = process.env.PORT || 6500;
app.listen(PORT,()=>{
    console.log("server is running port 6500");
})