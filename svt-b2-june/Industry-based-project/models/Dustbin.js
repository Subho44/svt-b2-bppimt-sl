const mongoose = require('mongoose');

const dustbinschema = new mongoose.Schema({
    location:String,
    status:String,
    lastCleaned:Date
});
module.exports = mongoose.model('Dustbin',dustbinschema);