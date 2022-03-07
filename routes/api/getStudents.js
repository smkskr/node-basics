const data = require("../../db/students");//to import students data module

const getStudents = (req,res)=>{
    res.send(data);
}

module.exports = getStudents