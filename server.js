const express = require(`express`)
const  servercongif = require("./configs/server.config")
const mongoose = require("mongoose")
const dbConfig = require("./configs/db.config");
const userModel = require("./models/user.model");
const bcrypt = require("bcrypt")

const app = express();
// logic to connect Mongdb and  create an ADMIN user
//Need to have the mongodb up and running in your local machine

 mongoose.connect(dbConfig.DB_URL);
 const db = mongoose.connection;
 db.on("error",()=>{
    console.log("error  while connecting  to db");  
 });
 db.once("open",()=>{
    console.log("DB  is  connected");
    
    init()
 })

 async function init(){
  
      let admin =  await userModel.findOne({
            userid : "admin"
      })
      if(admin){
        console.log("admin user is already present");
        return
      }

    //initialize the mongo db
    //need  to create the admin user
     admin = await userModel.create({
      name:"akshay jain",
      userid:"admin222",
      email:"ajjjakshayjain11@gmail.com",
      usertype:"admin",
      password:bcrypt.hashSync("welcome1",8) 

    })
    console.log(admin);
 }




app.listen(servercongif.port,()=>{
    console.log(`server started on the port number ${servercongif.port}`);
})




