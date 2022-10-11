const mongoose= require ("mongoose");//37
const studentsModel= mongoose.model("students",{
    name: {type: String},
});//38
module.exports = studentsModel;//39