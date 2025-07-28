const mongoose = require('mongoose');

const dustbinschema = new mongoose.Schema({
    location:{type:String,required:true},
    status:{type:String,required:true},
    lastCleaned:{type:Date,default:Date.now},
    image:{type:String}
});
module.exports = mongoose.model('Dustbin',dustbinschema);