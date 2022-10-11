const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

const server = app.listen(3000,()=>{
    console.log("Blog is running on the port - 3000")
})

// app.listen(port, ()=>{
//     console.log('Blog app listening at http://lcalhost:${port}')
// })  