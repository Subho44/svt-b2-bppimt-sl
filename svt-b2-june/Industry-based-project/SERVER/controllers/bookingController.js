const Booking = require('../models/Booking');
const Dustbin = require('../models/Dustbin');
const razorpay = require('razorpay');

//create booking & payment order
exports.bookDustbin = async(req,res)=>{

try {
    const {username,location,dustbinId,amount} = req.body;

    //create razorpay order
    const options = {
        amount:amount*100,
        currency:'INR',
        receipt:`recipt_order_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    const booking = await Booking.create({username,location,dustbinId,amount,paymentStatus:'Pending'});
    res.status(201).json({booking,order});


}catch(err){
    res.status(401).json({error:err.message});
}

};

//update payment status

exports.verifyPayment = async(req,res)=>{

   try {
    const {bookingId} = req.body;
    await Booking.findByIdAndUpdate(bookingId,{paymentStatus:'Paid'});
    res.status(200).json({message:'Payment verified and updated'});
   } catch(err){
     res.status(401).json({error:err.message});
   }
    
}
//get all booking

exports.getAllbookings = async(req,res)=>{
    const bookings = await Booking.find().populate('dustbinId');
    res.status(200).json(bookings);
}