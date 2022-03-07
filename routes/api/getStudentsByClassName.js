const data = require("../../db/students");//to import students data module

const getStudentsByClassName = (req,res) => {
    const student = data.filter((d) => {
        return d.class == req.params.name;
    })
    res.send(student);
}

module.exports = getStudentsByClassName;