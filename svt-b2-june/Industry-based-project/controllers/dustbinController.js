
const Dustbin = require('../models/Dustbin');

//create
exports.createDustbin = async(req,res)=>{
    const {location,status} = req.body;
    const image = req.file ? req.file.filename : null;
    const newdata = await Dustbin.create({location,status,image});
    res.status(201).json(newdata);
}
//view all data
exports.getallDustbin = async(req,res)=>{
    const datas = await Dustbin.find();
    res.status(201).json(datas);
}
//update all data
exports.updateDustbin = async(req,res)=>{
    const updatedata = await Dustbin.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);
}
//deleted
exports.deleteDustbin = async(req,res)=>{
    await Dustbin.findByIdAndDelete(req.params.id);
    res.status(201).json({message:'Deleted successfully'});
}