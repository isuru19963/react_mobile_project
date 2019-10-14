const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
        price:{type:Number,require:true},
        image_url:{type:String,required:true},
    },
    { timestamps: true },
)


module.exports = mongoose.model('users', Movie)