import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

function App() {

  const [students, setStudents] = useState([]);
  const [addingStudent, setAddingStudent] = useState(false);

  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [age, setAge] = useState(0);

  const fetchStudents = async () => {
    const { data } = await axios.get(`http://localhost:5000/students/`);
    setStudents(data);
  }

  const addStudent = async () => {
    const newStudent = {
      name: name,
      firstname: firstname,
      age: age
    }
    const { data } = await axios.post(`http://localhost:5000/students/`, newStudent);
    setStudents(data);
    setAddingStudent(false);
  }

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`);
    const updatedStudents = students.filter((student) => student._id !== id);
    setStudents(updatedStudents);
  }

  return (
    <div>
      <Button variant="success" onClick={() => setAddingStudent(true)}>Ajouter un étudiant</Button>
    
      { addingStudent &&
        <div className="">
          Name :<input type="text" onChange={(e) => setName(e.target.value)}/>
          Firstname :<input type="text" onChange={(e) => setFirstname(e.target.value)}/>
          Age :<input type="text" onChange={(e) => setAge(e.target.value)}/>
          <button onClick={() => addStudent()}>Ajouter</button>
        </div>
      }

      <Button variant="primary" onClick={() => fetchStudents()}>Récupérer les étudiants</Button>     

      { students && students?.map((student) => 
        <div className="studentContainer">
          {student.name} {student.firstname}
          <FaPencilAlt />
          <FaTrashAlt onClick={() => deleteStudent(student._id)}/>
        </div>
      )
      }
    </div>
  );
}

export default App;
