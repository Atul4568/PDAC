const { json } = require("body-parser");
const express = require("express");

const app = express();
app.use(json());

app.get("/",(req,res)=>{
    res.send("email service is up");
});
app.post("/send", (req,res)=>{
    const msg = req.body.subject;
    res.send(msg);
})

const server = app.listen(5051,()=>{
    console.log("Email service is running on the port - 5051")
})




//{
//     "to": "tingre48@gmail.com",
//     "cc":"atultingre18@gmail.com",
//     "bcc":"",
//     "subject":"Happy diwali",
//     "body": "Hi, Greeting from Atul tingre on ocassion of Diwali"
//   }