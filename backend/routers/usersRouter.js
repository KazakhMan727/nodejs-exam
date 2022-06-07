const express = require("express");
const usersRouter = express.Router();
const models = require("./../Models");

usersRouter.get("/", async (req, res) => {
    let users = await models.User.find({});
    res.status(200).send(users);
});

usersRouter.post("/", async (req, res) => {
    let {fullName, login, password, roleId} = req.body;
    let newUser = new models.User({fullName, login, password, roleId});

    await newUser.save();
    res.status(201).send("user added");
});

usersRouter.post("/login", async (req, res) => {
    let {login, password} = req.body;
    let foundUser = await models.User.findOne({login, password});
    
    if (foundUser != null) {
        res.status(200).send(user);
    }

    else {
        res.status(401).send(null);
    }
});

module.exports = usersRouter;