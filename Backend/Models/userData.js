const mongoose = require('mongoose')

const schema = mongoose.Schema

const userDataSchema = new schema({
    Username: {
        type: String,
        required: true
    },
    Email_Id:{
      type: String,
      required: true
    },
    Phone:{
        type: Number,
        required: false
    },
    College:{
        type: String,
        required: true
    },
    Course:{
        type: String,
        required: false
    },
    Branch:{
        type: String,
        required: false
    },
    Year:{
        type: Number,
        required: false
    }
},{timestamps: true})

module.exports= mongoose.model('userData',userDataSchema)
