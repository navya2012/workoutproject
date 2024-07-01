
const userModels = require('../models/userModel')
const { check, validationResult } = require('express-validator');

const createToken = require("../Utils/Token")

const loginDetails = async (req,res) => {
    const {  email,password} = req.body
    try{
     // store data into db
     const user = await userModels.login(email,password)

     //create token
     const token = createToken(user._id)
     res.status(200).json({email,password, token})
    }
    catch(err){
     res.status(400).json({error: err.message})
    }
} 


const signUpDetails = async (req,res) => {
   const {  email,password} = req.body
   try{
    // store data into db
    const user = await userModels.signup(email,password)

    // Validation check
    const error = validationResult(req).formatWith(({  msg,value }) => {
        return { msg, value };
    });
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    //create token
    const token = createToken(user._id)
    res.status(200).json({email,password, token})
   }
   catch(err){
    res.status(400).json({error: err.message})
   }
} 

// Validation rules for sign-up
const signUpValidationRules = [
    check('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/[a-z]/).withMessage('Password must contain a lowercase letter')
];

module.exports ={
    loginDetails,
    signUpDetails,
    signUpValidationRules
}