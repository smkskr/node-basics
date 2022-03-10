const express = require("express");
const createTask = require("./api/createTask");
const getStudentsByClassName = require("./api/getStudentsByClassName");
const getStudentsByRollNum = require("./api/getStudentsByRollNum");
const getTasks = require("./api/getTasks");
const router = express.Router();


//get all students
router.get("/tasks",getTasks);

//get student by roll Num
router.get("/student/:rollNum" , getStudentsByRollNum)

//get student by class name
router.get("/student/class/:name" , getStudentsByClassName)

//create task
router.post("/addtask",createTask)

module.exports = router;

