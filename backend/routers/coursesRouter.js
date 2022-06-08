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
    owner = JSON.parse(owner);
    let newCourse = new models.Course({title, owner, description, enrolledStudents, createdAt});

    await newCourse.save();
    res.status(201).send("course created");
});

coursesRouter.post("/enroll", async (req, res) => {
    let {_id, user} = req.body;
    user = JSON.parse(user);
    let course = await models.Course.findById({_id});

    course.enrolledStudents.push(user);

    await models.Course.findByIdAndUpdate(_id, {enrolledStudents: course.enrolledStudents});
    res.status(200).send("student subscribed");
});

module.exports = coursesRouter;