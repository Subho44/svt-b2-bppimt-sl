const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require('./config/db');
const dustbinRoutes = require('./routes/dustbinRoutes');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));
connectdb();
app.use('/api/dustbins',dustbinRoutes);
app.use('/api/auth',userRoutes);
app.get('/',(req,res)=>{
    res.send("Api is running");
});
const PORT = process.env.PORT||6500;
app.listen(PORT,()=>console.log('server is running port 6500'));