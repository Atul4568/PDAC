const mongoose= require ("mongoose");//30

const departmentsModel= mongoose.model("departments",{
    name: {type: String},
    nos:{type: Number},
});//31

module.exports = departmentsModel;//32