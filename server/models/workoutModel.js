
const mongoose = require("mongoose")

const workoutSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},
{
    timestamps:true    // add time when data is added
}
)

const workoutModel = new mongoose.model("workout", workoutSchema)

module.exports = workoutModel