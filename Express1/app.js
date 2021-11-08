require("dotenv").config();

const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");
const aboutRouter = require("./routes/about");
const testingRouter = require("./routes/testing");
const userRouter = require("./routes/user");

app.use(express.json());

app.use("/", indexRouter);
app.use("/users", userRouter)
app.use("/testing", testingRouter);
app.use("/about", aboutRouter);
app.use("*", errorRouter)

app.listen(process.env.HTTP_PORT, () => {
  console.log("Web App Online");
});

//Hello World
