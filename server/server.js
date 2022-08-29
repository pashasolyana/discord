const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const authRoutes = require('./routes/auth')

const PORT = process.env.PORT || process.env.API_PORT

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/auth', authRoutes)

mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`${PORT}`)
        })    
    })
    .catch(error => {
        console.log(error)
    })
