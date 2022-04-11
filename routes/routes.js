const router = require("express").Router();
const Student = require("../model/Student.js");
const Registration = require("../model/Registration.js")
const Course = require("../model/Course.js")

router.get("/", async (req, res) => {
    res.send("Hello World!")
});

router.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

router.post("/student", async (req, res) => {

    const students = await Student.find();
    if(students.length == 0){
        largest = "0";
    } else {
        for (let Student of students){
            var largest = Student.id
            if(Student.id > largest){
                largest = Student.id
            }
        }
        if (largest == "NaN"){
            largest = "0";
        }
    }
    const Student_id = parseInt(largest) + 1

    const existing_student = await Student.findOne({id: Student_id})
    if (existing_student){
        return res.status(409).json({error: "Student already exists."})
    }    
    const newStudent = new Student({
        id: Student_id,
        full_name: req.body.full_name,
        email: req.body.email
    });

    try {
        await newStudent.save();
        const students = await Student.find();
        res.status(201).json(students);
        console.log("Student created");
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

router.post("/course", async (req, res) => {
    const newCourse = new Course({
        course_code: req.body.course_code,
        course_name: req.body.course_name,
        course_description: req.body.course_description
    });
    try {
        await newCourse.save();
        const courses = await Course.find();
        res.status(201).json(courses);
        console.log("Course created");
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

router.post("/registration", async (req, res) => {
    const newRegistration = new Registration({
        student_id: req.body.student_id,
        course_code: req.body.course_code,
        registration_date: new Date().toLocaleDateString()
    });
    try {
        await newRegistration.save();
        const registrations = await Registration.find();
        res.status(201).json(registrations);
        console.log("Registration created");
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

router.get("/info", async (req, res) => {
    const students = await Student.find();
    const courses = await Course.find();
    const registrations = await Registration.find();
    const info = []
    registrations.map((data) => {
        info.push(
            {
                student_id: data.student_id,
                course_code: data.course_code,
                registration_date: data.registration_date
        })  
    })
    
    for (let data of info){
        for (let student of students){
            if (data.student_id == student.id){
                data.student_name = student.full_name
            }
        }
    }

    for (let data of info){
        for (let course of courses){
            if (data.course_code == course.course_code){
                data.course_name = course.course_name
            }
        }
    }
    res.json(info)

});


module.exports = router;