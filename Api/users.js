import mongoose from "mongoose";

const usersdata=new mongoose.Schema({
    usernmae:{
        type:String,
        required:true,
        unique:true

    },
    emial:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    profilepic:{
        type:String,
        default:"",
    },
    

},
{timestamps:true}
)

module.exports=mongoose.model("user",usersdata)
