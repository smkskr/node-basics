const express = require("express");
const createTask = require("./api/createTask");
const getTasks = require("./api/getTasks");
const router = express.Router();


//get all tasks
router.get("/tasks",getTasks);

//create task
router.post("/addtask",createTask)

module.exports = router;

