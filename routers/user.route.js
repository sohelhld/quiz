const express = require('express');
// const bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
const { userModel } = require('../models/user.model');
require('dotenv').config()


const userRouter = express.Router()

//signup
userRouter.post("/register",async(req,res)=>{
    
    const {username,email} = req.body

    try {
    //     const isUserPresent = await userModel.findOne({email}) 
    //    if(isUserPresent) return res.send("User is already Present, Please loging ")


        const user = new userModel({username,email})
        await user.save()

        res.status(201).send({"message":"User is Succesfully SignUp"})
        
    } catch (error) {
        res.status(400).send({"message":error.message})
    }
})


module.exports={
    userRouter
}