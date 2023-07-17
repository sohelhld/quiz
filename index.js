const express = require('express');
const { connection } = require('./db');
const { userRouter } = require('./routers/user.route');
const { quizRouter } = require('./routers/quiz.router');
const cors = require("cors");



const app = express()

app.use(express.json())
app.use(cors());

app.use("/users",userRouter)
// app.use("/api/restaurants",restaurantRouter)
 app.use("/quiz",quizRouter)


app.listen(7080,async()=>{

    try {
        await connection
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    }
    console.log("server is runing at port number 7070");
})