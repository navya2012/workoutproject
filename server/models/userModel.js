
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},
{ timestamp: true}
)

//static signup function
userSchema.statics.signup = async(email,password) => {
    const exists = await UserDetailsModel.findOne({email})
    if(exists){
        throw Error("Email already exists!")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await UserDetailsModel.create({email,password:hash})
    return user
}

const UserDetailsModel = new mongoose.model('LoginDetails', userSchema)

module.exports = UserDetailsModel