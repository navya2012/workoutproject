import React, { useContext, useEffect } from 'react'
import { WorkoutDataList } from '../../Context/WorkoutContext'
import axios from 'axios'
import './RecordStyles.css'

const Records = () => {
    const { workoutData, getWorkoutsData ,setUpdateForm} = useContext(WorkoutDataList)

    useEffect(() => {
        getWorkoutsData()
    }, [getWorkoutsData])

    //delete
    const handleDeleteData = async (_id) => {
        await axios.delete(`http://localhost:4000/api/workouts/${_id}`)
        getWorkoutsData()
    }

    //update data
    const handleUpdateData = async (item) => {
        setUpdateForm({
          _id: item._id,
          title: item.title,
          reps: item.reps,
          load: item.load
        })
      }
    return (
        <>  
        <div>
            {
                workoutData && workoutData.map((item) => {
                    return (
                        <div className='record' key={item._id}>
                            <h1>{item.title}</h1>
                            <p>Reps: {item.reps}</p>
                            <p>Load (in Kg): {item.load}</p>
                            <div className='btns'>
                            <button style={{backgroundColor:'#1aac83'}} onClick={() => {handleUpdateData(item)}}>Edit</button>{" "}
                            <button style={{backgroundColor:' #e7195a '}} onClick={() => { handleDeleteData(item._id) }}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Records