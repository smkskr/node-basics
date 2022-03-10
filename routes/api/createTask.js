const mongoose = require('mongoose');
const ToDoList = require('../../models/toDoList');


const createTask = (req,res) => {
    const task = new ToDoList(req.body);
    //mongoose function to create document in mongo db
    task.save()
    //if successfully saved
    .then((result) => {
        res.send(result);
    })
    //else capture error
    .catch((err)=>{
        console.log(err);
    });
 
}

module.exports = createTask;
