
require("dotenv").config();

const express = require("express")
const cors = require('cors')

const app= express()

const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
require('./db/connection')

//require routes
const workoutRoutes = require('./routes/workoutRoutes')
const userRoutes = require('./routes/userRoutes')

//routes 
app.use('/api/workouts', workoutRoutes )
app.use('/api/user', userRoutes )


app.get("/", (req,res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`server is running at port number ${port}`)
})