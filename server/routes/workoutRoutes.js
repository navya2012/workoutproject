
const express = require("express")

const router = express.Router()

//controllers
const { getWorkoutData, getWorkoutDataById, createWorkoutData, updateWorkoutData, deleteWorkoutData } = require('../controllers/workoutController')

//get entire data 
router.get('/', getWorkoutData)

//get entire data by id
router.get('/:id', getWorkoutDataById)

//create add
router.post('/', createWorkoutData)

//update data
router.patch('/:id', updateWorkoutData)

//delete data
router.delete('/:id', deleteWorkoutData)


module.exports = router