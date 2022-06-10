import React, {useState} from 'react';

const StudentDetails = ({student, removeStudent, updateStudent}) => {

    const [editing, setEditing] = useState(false);

    const [newName, setNewName] = useState();
    const [newFirstname, setNewFirstname] = useState();
    const [newAge, setNewAge] = useState();

    const validate = () => {
        
        if(newName) student.name = newName;
        if(newFirstname) student.firstname = newFirstname;
        if(newAge) student.age = newAge;

        updateStudent(student);

        setNewName(undefined);
        setNewFirstname(undefined);
        setNewAge(undefined);

        setEditing(false);

    }

    return (
        <div>
            {
                editing ? (
                    <div>
                        <div><label>Nom : </label> <input placeholder={student.name} onChange={(e) => setNewName(e.target.value)}/></div>
                        <div><label>Prénom : </label> <input placeholder={student.firstname} onChange={(e) => setNewFirstname(e.target.value)}/></div>
                        <div><label>Age : </label> <input placeholder={student.age} onChange={(e) => setNewAge(e.target.value)}/></div>
                        <button onClick={() => validate()}>Valider</button>
                        <button onClick={() => setEditing(false)}>Annuler</button>
                    </div>
                ) : 
                (
                    <div>
                        <div><label>Nom : </label> {student.name}</div>
                        <div><label>Prénom : </label> {student.firstname}</div>
                        <div><label>Age : </label> {student.age}</div>
                        <button onClick={() => setEditing(true)}>Modifier l'étudiant</button>
                        <button onClick={() => removeStudent(student)}>Supprimer l'étudiant</button>
                    </div>
                )
            }
            
        </div>
    )
}

export default StudentDetails;