require("dotenv").config()

const express = require("express")
const { connection } = require("./connection")
const Coffee = require("./models/coffee")
const coffeeRouter = require("./routes/coffee")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({msg: "Worked!"})
})
app.use("/coffee", coffeeRouter)

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.authenticate();
    Coffee.sync({alter: true})
    console.log("App Online")
})

