import * as StudentsService from "../services/students.service.js";   

export const getStudents = async (req, res) => {
    try {
        const students = await StudentsService.getStudents();
        return res.status(200).json({ status: 200, data: students, message: "Students succesfully retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const getStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await StudentsService.getStudent(studentId);
        return res.status(200).json({ status: 200, data: student, message: `Student with id ${studentId} succesfully retrieved` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const createStudent = async (req, res) => {
    try {
        const studentToCreate = req.body;
        const students = await StudentsService.createStudent(studentToCreate);
        return res.status(200).json({ status: 200, data: students, message: "Succesfully Students Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const updateStudent = async (req, res) => {
    try {
        const studentUpdated = await StudentsService.updateStudent(req.body);
        return res.status(200).json({ status: 200, data: studentUpdated, message: `Student with id ${req.body.studentId} succesfully updated` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const patchStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const studentUpdated = await StudentsService.patchStudent(studentId, req.body);
        return res.status(200).json({ status: 200, data: studentUpdated, message: `Student with id ${studentId} succesfully patched` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        await StudentsService.deleteStudent(studentId);
        return res.status(200).json({ status: 204, message: `Student with id ${studentId} succesfully deleted` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}