import express from "express";
import "../Api/users"

const user =require("../Api/users")

const router=express()


router.post('/register',async(req,res)=>{
    try{ 
        const newUser= new user({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        })

        const user= await newUser.save()
        res.status(200).jason(user)

    }catch(err){
        res.status(500).jasoon(err)
    }

})

module.exports=router