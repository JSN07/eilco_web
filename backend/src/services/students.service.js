import Student from '../models/students.model.js';
import mongoose from 'mongoose'

/**
 * 
 * @returns All students
 */
const getStudents = async () => {
    try {
        return await Student.find();
    } catch (e) {
        throw Error('Error while fetching student.');
    }
}

/**
 * 
 * @param studentId The student's id to find
 * @returns the student to find
 */
const getStudent = async (studentId) => {
    try {
        return await Student.findOne({_id: studentId});
    } catch (e) {
        throw Error('Error.');
    }
}

/**
 * 
 * @param studentToCreate Data of the student to create
 * @returns All students
 */
const createStudent = async (studentToCreate) => {
    try {
        const newStudent = new Student(studentToCreate)
        await newStudent.save()
        return getStudents();
    } catch (e) {
        throw Error('Error.');
    }
}

/**
 * 
 * @param studentToUpdate The student to update
 * @returns All students
 */
const updateStudent = (studentToUpdate) => {
    try {
        Student.findOneAndUpdate(studentToUpdate);
        return studentToUpdate;
    } catch (e) {
        throw Error('Error.');
    }
}

/**
 * 
 * @param studentId The student id
 * @param dataToPatch Data to patch
 * @returns The patched student
 */
const patchStudent = async (studentId, dataToPatch) => {
    try {
        const studentToPatch = await getStudent(studentId);
        const { name, firstname, age } = dataToPatch;
    
        if(name) studentToPatch.name = name;
        if(firstname) studentToPatch.firstname = firstname;
        if(age) studentToPatch.age = age;

        updateStudent(studentToPatch);
        return studentToPatch;
    } catch (e) {
        throw Error('Error.');
    }
}

const deleteStudent = async (studentId) => {
    try {
        await Student.deleteOne({_id: studentId});
    } catch (e) {
        throw Error('Error.');
    }
}

export {getStudents, getStudent, createStudent, updateStudent, patchStudent, deleteStudent}