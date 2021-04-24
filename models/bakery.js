
const mongoose = require("mongoose")
const bakerySchema = mongoose.Schema({
Itemname: {
        type: String,
        minlength: 4
},
Quantity: Number,
price: {
        type: String,
        minLength: 5
}
})
module.exports = mongoose.model("bakery", bakerySchema)