require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGOURL;

const dbconnection =async()=>{
    try{

    await mongoose.connect(url,{
        useNewUrlParser:true    
    });
  
    console.log("Mongo DB Connection Success");
}catch(e){
    console.log("Connection Error = ",e);
}
}

module.exports = dbconnection;