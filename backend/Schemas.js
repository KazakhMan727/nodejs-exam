const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: String,
    login: String,
    password: String,
    roleId: Number,
});

const CourseSchema = new Schema({
    title: String,
    owner: UserSchema,
    description: String,
    enrolledStudents: Array,
    createdAt: String
});

module.exports = {
    UserSchema,
    CourseSchema
}