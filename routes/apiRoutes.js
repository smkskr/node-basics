const express = require("express");
const getStudents = require("./api/getStudents");
const getStudentsByClassName = require("./api/getStudentsByClassName");
const getStudentsByRollNum = require("./api/getStudentsByRollNum");
const router = express.Router();


//get all students
router.get("/students",getStudents);

//get student by roll Num
router.get("/student/:rollNum" , getStudentsByRollNum)

//get student by class name
router.get("/student/class/:name" , getStudentsByClassName)


module.exports = router;

