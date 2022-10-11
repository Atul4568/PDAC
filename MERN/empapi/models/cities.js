const mongoose = require("mongoose");//15
const citiesModel=mongoose.model("cities",{name:{type: String},});//16
module.exports = citiesModel;//17