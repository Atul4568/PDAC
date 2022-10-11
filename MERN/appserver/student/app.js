const { json } = require("express");//10
const express = require ("express"); //1
const studentsInfo= require("./dbinfo"); //5

const app = express(); //2
app.use(json());//9
app.get("/", (req,res)=>{
    res.send("student service...")
}); //4

app.get("/all", (req,res)=>{
    res.json(studentsInfo);
}); //6

app.post("/sportswise", (req,res)=>{
const filtred=  studentsInfo.filter((item) => item.favsports === req.body.sports)
res.json(filtred)//8
});//7

app.post("/classwise",(req,res)=>{
    const filtred = studentsInfo.filter((item)=>item.class === req.body.class)
    res.json(filtred);
})//11

app.post("/housewise",(req,res)=>{
    const filtred = studentsInfo.filter((item)=> item.house.toUpperCase() === req.body.house.toUpperCase())
    res.json(filtred)
})

app.post("/classdivwise", (req,res)=>{
    const filtred = studentsInfo.filter(item=>item.class === req.body.class && item.div.toUpperCase()===req.body.div.toUpperCase())
    res.json(filtred);
})

const server = app.listen(5050,()=>{
    console.log("student server is running on port - 5050")
}); //3