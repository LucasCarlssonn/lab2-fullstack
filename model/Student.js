const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Student", StudentSchema);