import { students } from '../mocks/students.mock.js'

const getStudents = () => {
    try {
        return students;
    } catch (e) {
        throw Error('Error while fetching student.');
    }
}

const getStudent = (studentId) => {
    try {
        return students.find((student) => student.id.toString() === studentId);
    } catch (e) {
        throw Error('Error.');
    }
}

const createStudent = (name, firstname, age) => {
    try {
        const newStudent = {
            id: students.length+1,
            name: name,
            firstname: firstname,
            age: age
        }
        students.push(newStudent);
        return students;
    } catch (e) {
        throw Error('Error.');
    }
}

const updateStudent = (body) => {
    try {
        const studentToUpdate = getStudent(body.id.toString());
        if(studentToUpdate) {
            studentToUpdate.name = body.name;
            studentToUpdate.firstname = body.firstname;
            studentToUpdate.age = body.age;
            return studentToUpdate;
        }
        throw Error('Student doesn\'t exist');
    } catch (e) {
        throw Error('Error.');
    }
}

const patchStudent = (studentId, body) => {
    try {
        const {  name, firstname, age } = body;
        
        const studentToPatch = getStudent(studentId);
        
        if(studentToUpdate) {
            if(name) studentToPatch.name = name;
            if(firstname) studentToPatch.firstname = firstname;
            if(age) studentToPatch.age = age;

            deleteStudent(studentId);
            students.push(studentToPatch);
            
            return studentToPatch;
        }
        throw Error('Student does\'nt exist.'); 
    } catch (e) {
        throw Error('Error.');
    }
}

const deleteStudent = (studentId) => {
    try {
        return students.filter((student) => 
            student.id.toString() !== studentId
        );
    } catch (e) {
        throw Error('Error.');
    }
}

export {getStudents, getStudent, createStudent, updateStudent, patchStudent, deleteStudent}