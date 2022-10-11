const cors=require("cors")
const express = require("express");
const studentsInfo = require("./dbinfo");
const {json}=require("body-parser")

const app = express();
app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Student service...");
});

app.get("/all", (req, res) => {
  res.json(studentsInfo);
});

app.post("/sportwise", (req, res) => {
  const filtered = studentsInfo.filter(
    (item) => item.favsports === req.body.sports
    );
    res.json(filtered);
});

app.post("/classwise",(req,res)=>{
    const filtered= studentsInfo.filter(item=>item.class===req.body.class);
    res.json(filtered);
});

app.post("/housewise",(req,res)=>{
    const filtered= studentsInfo.filter(item=>item.house.toUpperCase()===req.body.house.toUpperCase())
    res.json(filtered);
})

app.post("/classdivwise",(req,res)=>{
    const filtered=studentsInfo.filter(item=>item.class=== req.body.class && item.div.toUpperCase()===req.body.div.toUpperCase())
    res.json(filtered);
})

const server = app.listen(5050, () => {
  console.log("Student service is running on port 5050");
});