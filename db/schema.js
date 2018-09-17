const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donutSchema = new Schema ({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const DonutModel = mongoose.model('Donut', donutSchema)
module.exports = {
    Donut: DonutModel 
}