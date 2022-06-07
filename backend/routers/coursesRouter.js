const express = require("express");
const coursesRouter = express.Router();
const models = require("./../Models");

coursesRouter.get("/", async (req, res) => {
    let courses = await models.Course.find({});
    res.status(200).send(courses);
});

coursesRouter.get("user/:userId", async (req, res) => {
    let userId = req.params.userId;
    let coursesByUser = await models.Course.find({owner: {_id: userId}});
    res.status(200).send(coursesByUser);
});

coursesRouter.post("/", async (req, res) => {
    let {title, owner, description, enrolledStudents, createdAt} = req.body;
    let newCourse = new models.Course({title, owner, description, enrolledStudents, createdAt});

    await newCourse.save();
    res.status(201).send("course created");
});

coursesRouter.post("/enroll", async (req, res) => {
    let {_id, fullName, login, roleId} = req.body;
    let enrolledStudent = {fullName, login, roleId};
    await models.Course.findByIdAndUpdate(_id, {enrolledStudents: enrolledStudent});
});

module.exports = coursesRouter;