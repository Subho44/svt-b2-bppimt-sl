const mongoose = require('mongoose');

const bookingschema = new mongoose.Schema({
    username:{type:String,required:true},
    location:{type:String,required:true},
    dustbinId:{type:mongoose.Schema.Types.ObjectId,ref:'Dustbin',required:true},
    amount:{type:Number,required:true},
    paymentStatus:{type:String,default:'Pending'},
    createdAt:{type:Date,default:Date.now},
    
});
module.exports = mongoose.model('Booking',bookingschema);