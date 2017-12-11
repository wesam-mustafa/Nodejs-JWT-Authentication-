//get an instance of mongoose and mongoose.schema
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
//setting up our Schema
var userSchema=new Schema({
    name:String,
    password:String,
    admin:Boolean
});

// pass mongoose model using module.exports
var User=mongoose.model('User',userSchema);
module.exports=User;
