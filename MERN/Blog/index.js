const express = require('express')
// const path = require('path')
const app = express()

// app.use(express.static(path.join(__dirname, "static")))

app.get('/home', (req, res) => {
    console.log('home page is running up')

})

const server = app.listen(5050,()=>{
    console.log("Blog is running on the port - 5050")
})

// app.listen(port, ()=>{
//     console.log('Blog app listening at http://lcalhost:${port}')
// })