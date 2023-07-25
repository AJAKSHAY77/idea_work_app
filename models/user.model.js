// this will  hold  the schema for the user
const mongoose = require("mongoose")

// in schema there are 3 things fields,type,constraints
const userschema = new mongoose.Schema({
   name : {
    type : String,
    required : true
   },
   userid : {
    type : String,
    required : true,
    unique : true
   },
   password:{
    type:String,
    required:true

   },
   email:{
    type:String,
    required:true,
    unique:true,
    minlenght:10,
    lowercase:true

   },
   usertype:{
    type:String,
    required:true,
    default:"customer",
    enum:["customer","admin"]

   }

},{timestamps:true})
 //this mongoose.model method will create collection and  firstparameter is the name we give and second is our schema

 module.exports =  mongoose.model("user",userschema)