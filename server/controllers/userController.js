


const userModels = require('../models/userModel')

  
const createToken = require("../Utils/Token")

const loginDetails = async (req,res) => {
    res.json({msg:'User logged in'})
} 


const signUpDetails = async (req,res) => {
   const {  email,password} = req.body
   try{
    // store data into db
    const user = await userModels.signup(email,password)

    console.log(` user data added`)
    //create token
    const token = createToken(user._id)

    res.status(200).json({user, token})
   }
   catch(err){
    res.status(400).json({error: err.message})
   }
} 

module.exports ={
    loginDetails,
    signUpDetails
}