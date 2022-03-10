const mongoose = require('mongoose');
const ToDoList = require('../../models/toDoList');

const getTasks = (req,res)=>{
    ToDoList.find()
    .then((result)=>{
        res.send(result);
       })
       .catch((err)=>{
           console.log(err);
       })
    }

module.exports = getTasks