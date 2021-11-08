require("dotenv").config();

const express = require("express");
const { connection } = require("./connection");
const app = express();
const coffeeRouter = require("./routes/coffee")

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({msg: "Worked!"})
})

app.use("/coffee", coffeeRouter)

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.once("open", () => {
        console.log("MongoDB Database Connection Established SUCCESSFULLY")
        console.log("App Online")
    })
})