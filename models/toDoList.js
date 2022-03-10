const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoListSchema = new Schema({
    taskId:{
        type: Number,
        required: true
    },
    taskDesc:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required : true
    }
 }, {timestamps : true});
 
 const ToDoList = mongoose.model('toDoLists', toDoListSchema);
 
 module.exports = ToDoList;
 