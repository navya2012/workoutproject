
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    { timestamp: true }
)

//static signup function
userSchema.statics.signup = async (email, password) => {

    // checking user exists or not
    const exists = await UserDetailsModel.findOne({ email })
    if (exists) {
        throw Error("Email already exists!")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await UserDetailsModel.create({ email, password: hash })
    return user
}


//static login function
userSchema.statics.login = async (email, password) => {

    //checking user matches or not
    const userDetails = await UserDetailsModel.findOne({ email })
    if (!userDetails) {
        throw Error("Incorrect Email!")
    }

    // checking user-input password and hash password
    const match = await bcrypt.compare(password, userDetails.password)
    if (!match) {
        throw Error("Incorrect password!")
    }
    return userDetails
}


const UserDetailsModel = new mongoose.model('LoginDetails', userSchema)

module.exports = UserDetailsModel