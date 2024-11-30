const mongoose = require('mongoose');
var schema =mongoose.Schema({
    Name:String,
    RegNo:Number,
    Age:Number,
    Dept:String,
    PhNo:Number
})
var studentModel=mongoose.model("student",schema)
module.exports=studentModel
