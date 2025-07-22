const mongoose = require('mongoose');

const dustbinschema = new mongoose.Schema({
    location:String,
    status:String,
    lastcleaned:Date
});
module.exports = mongoose.model('Dustbin',dustbinschema);