
const workoutModels = require('../models/workoutModel')

//get all data
const getWorkoutData = async (req,res) => {
    const user_id =  req.user._id
    try{
        const getWorkoutData = await workoutModels.find({user_id}).sort({createdAt:-1})
        res.status(200).json(getWorkoutData)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

//get all data
const getWorkoutDataById = async (req,res) => {
    try{
        const id = req.params.id
        const getWorkoutData = await workoutModels.findById({_id: id})
        res.status(200).json(getWorkoutData)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

//create data
const createWorkoutData = async (req,res) => {
    const { title, reps, load} = req.body
    const user_id =  req.user._id

    try{
        const newWorkoutData = new workoutModels({title, reps, load, user_id})
        await newWorkoutData.save()
        res.status(201).json({message: "Data Successfully Created"})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

//update data
const updateWorkoutData = async (req,res) => {
    try{
        const id = req.params.id
     await workoutModels.findByIdAndUpdate({_id:id}, req.body,{new:true})
        res.status(201).json({message: "Data Successfully Updated"})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

//delete data
const deleteWorkoutData = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            await workoutModels.findByIdAndDelete({ _id: id });
            res.status(201).json({ message: "Data Successfully Deleted" });
        } else {
            await workoutModels.deleteMany({});
            res.status(201).json({ message: "Deleted All The Data Successfully" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getWorkoutData,
    getWorkoutDataById,
    createWorkoutData,
    updateWorkoutData,
    deleteWorkoutData
}