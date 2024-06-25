import axios from 'axios'
import React, {  createContext, useState } from 'react'

export const WorkoutDataList = createContext( )

const WorkoutContext = ({children}) => {
    const [workoutData, setWorkoutData] = useState(null)
    const [form, setForm] = useState({
        title: '',
        reps: '',
        load: ''
      })

  //get
  const getWorkoutsData = async () => {
    const response = await axios.get('http://localhost:4000/api/workouts')
    setWorkoutData(response.data)
  }

  //update data
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: '',
    reps: '',
    load: ''
  })

  return (
    <>
        <WorkoutDataList.Provider value={{workoutData,setWorkoutData,getWorkoutsData,form,setForm,updateForm,setUpdateForm
        }}
        >
            {children}
        </WorkoutDataList.Provider>
    </>
  )
}

export default WorkoutContext