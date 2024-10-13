const mongoose = require('mongoose')
const schema = mongoose.Schema

const postDataSchema = new schema({
    Title: {
        type: String,
        required: true
    }, 

    Content: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports= mongoose.model('postData',postDataSchema)