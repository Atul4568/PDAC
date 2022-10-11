const mongoose= require ("mongoose");//23

const housesModel= mongoose.model("houses",{name:{type: String},
});//24

module.exports= housesModel;//25