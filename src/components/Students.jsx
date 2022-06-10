import React, { useState } from 'react';
import StudentDetails from './StudentDetails.jsx';
import { studentsMocked } from '../mocks/students.mock.js';

const Students = () => {

    const [students, setStudents] = useState(studentsMocked);
    const [selectedStudent, setSelectedStudent] = useState();

    const handleChange = (studentId) => {
        const studentToSelect = students.find((student) => student._id === studentId);
        setSelectedStudent(studentToSelect);
    }

    const removeStudent = (studentToRemove) => {
        const indexToRemove = students.findIndex((student) => student._id === studentToRemove._id);
        students.splice(indexToRemove, 1);
        setSelectedStudent(undefined);
    }

    const updateStudent = (studentToUpdate) => {
        const updatedStudents = students.map((student) => {
            if (student._id === studentToUpdate._id) {
                return studentToUpdate;
            } else {
                return student;
            }
        })
        setStudents(updatedStudents);
    }

    return (
        <div>
            <div>
                <select onChange={(e) => handleChange(e.target.value)}>
                    <option>Sélectionner un étudiant</option>
                    {
                        students.map((student) => {
                            return <option value={student._id}>{student.firstname} {student.name}</option>
                        })
                    }
                </select>
            </div>
            {selectedStudent && <StudentDetails student={selectedStudent} removeStudent={removeStudent} updateStudent={updateStudent} />}

        </div>
    )
}

export default Students;