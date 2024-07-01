
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
    },
    user_id:{
        type: String,
        required:true
    }
},
{
    timestamps:true    // add time when data is added
}
)

const workoutModel = new mongoose.model("workout", workoutSchema)

// const addWorkoutData = async (title, reps, load, user_id) => {
// console.log(title, reps, load, user_id)
//     try{
//         console.log("new data")
  
//         const workoutData = await workoutModel.create({title, reps, load, user_id})
//         return workoutData
//     }
//     catch(err){
//         console.log(err)
//     }
// }

module.exports = workoutModel