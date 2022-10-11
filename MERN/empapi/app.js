const {json} = require("body-parser");//1
const express = require ("express");//2
const cors = require("cors");//3
const mongoose = require("mongoose");//11
const citiesModel = require("./models/cities")//18
const housesModel = require("./models/houses")//26
const departmentsModel = require("./models/departments")//33
const studentsModel = require("./models/students")//40

const app = express();//4
app.use(json());//5
app.use(cors());//6

const server = app.listen(4040,()=>{
    console.log("Employee Service is Running on Port - 4040");//8
});//7

app.get("/",(req,res)=>{
    res.send("You are Connected to Employee Service...");//10
});//9

const db = "mongodb://localhost:27017/empdb";//12
mongoose.connect(db).then(()=> console.log("Database is Connected")).catch((err)=>console.log(err));//13

app.get("/cities", async (req,res)=>{
    const result = await citiesModel.find({});//19
    const newdata = result.map((item)=>({value:item._id,lable:item.city}));//21
    res.json(newdata);//20
});//14

app.get("/houses", async (req,res)=>{
    const result = await housesModel.find({});//27
    const newdata = result.map((item)=>({value:item._id,lable:item.name}));//28
    res.json(newdata);//20
});//22

app.get("/departments", async (req,res)=>{
    const result = await departmentsModel.find({});//34
    const newdata = result.map((item)=>({value:item._id,lable:item.name}));//35
    res.json(newdata);//20
});//29

app.get("/students", async (req,res)=>{
    const result = await studentsModel.find({});//41
    const newdata = result.map((item)=>({value:item._id,lable:item.name}));//42
    res.json(newdata);//20
});//36


