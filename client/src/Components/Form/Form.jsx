import React, { useContext } from 'react'
import { WorkoutDataList } from '../../Context/WorkoutContext'
import axios from 'axios'
import './FormStyles.css'

const Form = () => {

  const { form, setForm, setWorkoutData, workoutData, getWorkoutsData, setUpdateForm, updateForm }
    = useContext(WorkoutDataList)

  //create data
  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const createSubmitData = async (e) => {
    e.preventDefault()

    const response = await axios.post('http://localhost:4000/api/workouts', form)
    setWorkoutData([...workoutData, response])
    setForm({
      title: '',
      reps: '',
      load: ''
    })
    getWorkoutsData()
  }

  //update data
  const handleEditData = (e) => {
    const { name, value } = e.target

    setUpdateForm({
      ...updateForm,
      [name]: value
    })
  }


  const updateSubmitData = async (e) => {
    e.preventDefault()

    const { _id, title, reps, load } = updateForm
    await axios.patch(`http://localhost:4000/api/workouts/${_id}`, {
      title,
      reps,
      load
    })
    getWorkoutsData()
    setUpdateForm({
      _id: null,
      title: '',
      reps: '',
      load: ''
    })
  }
  return (
    <>
      {
        !updateForm._id && (
          <div className='form'>
             <h1>Create Record</h1>
            <form onSubmit={createSubmitData}>            
              <div className="field">
                <label htmlFor="">Title:</label>
                <input type="text" name='title' value={form.title} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="">Reps:</label>
                <input type="tel" name='reps' value={form.reps} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="">Load (in Kg):</label>
                <input type="tel" name='load' value={form.load} onChange={handleChange} />
              </div>
              <button>Submit</button>
            </form>
          </div>
        )
      }


      {
        updateForm._id && (
          <div className='form'>
              <h1>Update Record</h1>
            <form onSubmit={updateSubmitData}>
              <div className="field">
                <label htmlFor="">Title:</label>
                <input type="text" name='title' value={updateForm.title} onChange={handleEditData} />
              </div>
              <div className="field">
                <label htmlFor="">Reps:</label>
                <input type="tel" name='reps' value={updateForm.reps} onChange={handleEditData} />
              </div>
              <div className="field">
                <label htmlFor="">Load (in Kg):</label>
                <input type="tel" name='load' value={updateForm.load} onChange={handleEditData} />
              </div>
              <button>Update</button>
            </form>
          </div>
        )
      }

    </>
  )
}

export default Form