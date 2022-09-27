import mongoose from "mongoose";

const postdata=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    des:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
    },

    username:{
        type:String,
        required:true,
        unique:true,
    },
    catagories:{
        type:Array,
        required:false,
    }

},
{timestamps:true}
)
module.exports=mongoose.model("post",postdata)