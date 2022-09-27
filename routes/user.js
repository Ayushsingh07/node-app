import express from 'express'
import { v4 as uuidv4 } from "uuid";

//import mongoose from "mongoose";

//mongoose.connect("mongodb://localhost/users")

const router =express.Router()

let users=[]


router.get('/', (req,res)=>{
    console.log(users)
    res.send(users)
})


router.post('/', (req,res)=>{
    console.log("post reached")
    const user=req.body
    const userID =uuidv4()
    const userwithID={ ...user,id:userID}

    users.push(userwithID)
    res.send(`user with the username ${user.name} added to the DB`)
    
})

router.get('/:id',(req,res)=>{
    const { id} =req.params
    const finduser=users.find((user)=>user.id === id)
    res.send(finduser)

})

router.delete('/:id',(req,res)=>{
    const {id }=req.params

    users=users.filter((user)=> user.id !==id)
    res.send(`user with the id ${id} removed from the Db`)
})


router.patch('/:id',(req,res)=>{
    const {id}=req.params
    const{name,lastname,age}=req.body
    


    const user=users.find((user)=>user.id === id)

    if(name){
        user.name=name
    }
    if(lastname){
        user.lastname=lastname
    }

    if(age){
        user.age=age
    }
    res.send(`updated with id ${id} is updatred`)    
})













export default router