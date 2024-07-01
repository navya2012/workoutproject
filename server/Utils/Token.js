
const jwt = require("jsonwebtoken")

const createToken =(_id)=>{
   return jwt.sign({_id}, process.env.JWT_TOKEN ,{
        expiresIn:"7d"
    })

}


module.exports = createToken