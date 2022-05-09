import express from 'express';
import { getStudents, getStudent, createStudent, updateStudent, deleteStudent, patchStudent } from '../controllers/students.controller.js'

const router = express.Router();

router.get('/', getStudents);

router.get('/:studentId', getStudent);

router.post('/', createStudent);

router.put('/:studentId', updateStudent);

router.patch('/:studentId', patchStudent);

router.delete('/:studentId', deleteStudent);

export default router;