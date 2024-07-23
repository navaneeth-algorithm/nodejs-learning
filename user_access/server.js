const bodyParser = require("body-parser");
const express = require("express");
const userRoutes = require("./app/routes/userRoutes")

const app = express()

app.use(bodyParser.json());

app.use('/api/user',userRoutes)

const port = process.env.port | 3000;

app.listen(port,()=>{
    console.log("Here!! I'am listening at POST 3000!!!")
})