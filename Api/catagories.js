import mongoose from "mongoose";

const categorydata=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
   

},
{timestamps:true}
)
module.exports=mongoose.model("category",categorydata)
