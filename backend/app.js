const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const usersRouter = require("./routers/usersRouter");
const coursesRouter = require("./routers/coursesRouter");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);

const CONNECTION_STRING = "mongodb+srv://16bytes:bits32@cluster0.w6sus.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, (err) => {
    if (err) console.log(err);
    app.listen(8080);
});