import * as StudentsService from "../services/students.service.js";   

export const getStudents = (req, res) => {
    try {
        const students = StudentsService.getStudents();
        return res.status(200).json({ status: 200, data: students, message: "Students succesfully retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const getStudent = (req, res) => {
    try {
        const { studentId } = req.params;
        const student = StudentsService.getStudent(studentId);
        return res.status(200).json({ status: 200, data: student, message: `Student with id ${studentId} succesfully retrieved` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const createStudent = (req, res) => {
    try {
        const { name, firstname, age } = req.body;
        const students = StudentsService.createStudent(name, firstname, age);
        return res.status(200).json({ status: 200, data: students, message: "Succesfully Students Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const updateStudent = (req, res) => {
    try {
        const studentUpdated = StudentsService.updateStudent(req.body);
        return res.status(200).json({ status: 200, data: studentUpdated, message: `Student with id ${req.body.studentId} succesfully updated` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const patchStudent = (req, res) => {
    try {
        const { studentId } = req.params;
        const studentUpdated = StudentsService.patchStudent(studentId, req.body);
        return res.status(200).json({ status: 200, data: studentUpdated, message: `Student with id ${studentId} succesfully patched` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const deleteStudent = (req, res) => {
    try {
        const { studentId } = req.params;
        const students = StudentsService.deleteStudent(studentId);
        return res.status(200).json({ status: 200, data: students, message: `Student with id ${studentId} succesfully deleted` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}