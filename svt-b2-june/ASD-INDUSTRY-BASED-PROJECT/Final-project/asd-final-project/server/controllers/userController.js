const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//register
exports.register = async (req, res) => {
    const{name,email,password} = req.body;
    try {
        const hashedpassword = await bcrypt.hash(password,15);
        const user = await User.create({name,email,password:hashedpassword});
        res.status(201).json({message:'user register successfully'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//login

exports.login = async (req, res) => {
    const{email,password} = req.body;
    try {
       const user = await User.findOne({email});
       const match = await bcrypt.compare(password,user.password);
       if(!match) return  res.status(400).json({ message: error.message });
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
        res.status(201).json({token});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//dashboard
exports.dashboard = async(req,res)=> {
    res.json({message:'welcome to dashboard'});
}