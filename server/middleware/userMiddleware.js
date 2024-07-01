
const jwt = require('jsonwebtoken')

const userModels = require("../models/userModel")

const authUser = async (req,res,next) => {
    // contains all the tokens
    const {authorization} = req.headers

   
    if(!authorization){
        res.status(401).json({error: "Auth token is required"})
    }

    const token = authorization.split(" ")[1]
   
    try{
        // checking token entered by user and generated at time of login is same or not 
        const {_id} = jwt.verify(token, process.env.JWT_TOKEN)

        //checking id is present in db or not- only checking id
        req.user = await userModels.findOne({_id}).select("_id")

        //after checking move to next operations
        next()

    }
    catch(err){
        res.status(401).json({error:'Request is not authorized'})
    }

}

module.exports = authUser