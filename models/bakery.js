const mongoose = require("mongoose")
const bakerySchema = mongoose.Schema({
        Itemname: String,
        Quantity: Number,
        price: String
})
module.exports = mongoose.model("bakery", bakerySchema)