const mongoose = require("mongoose");
const schemas = require("./Schemas");

const User = mongoose.model("User", schemas.UserSchema);
const Course = mongoose.model("Course", schemas.CourseSchema);

module.exports = {
    User,
    Course
}