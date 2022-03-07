const data = require("../../db/students");//to import students data module

const getStudentsByRollNum = (req,res) => {
    const student = data.filter((d) => {
        return d.rollNum == req.params.rollNum;
    })
    res.send(student);
}

module.exports = getStudentsByRollNum;