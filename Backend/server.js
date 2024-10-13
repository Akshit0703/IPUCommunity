require('dotenv').config()
const express = require('express')
const requests = require('./routes/api')
const mongoose = require('mongoose')

//express server
const app = express()



app.use(express.json())
app.use('/api', requests)

//database connection
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    
     //listen for requests
    app.listen(process.env.PORT, () =>{
    console.log('connected to db listening on port 3000')
    })
  })
  .catch((error)=>{
    console.log(error)
  })