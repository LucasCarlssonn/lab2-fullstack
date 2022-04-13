const mongoose = require("mongoose")

const RegistrationSchema = new mongoose.Schema({
    student_id: {
        type: String,
        required: true
    },
    course_code: {
        type: String,
        required: true
    },
    registration_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Registration", RegistrationSchema)