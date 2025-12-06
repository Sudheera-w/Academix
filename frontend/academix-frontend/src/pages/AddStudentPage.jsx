import {useState} from "react";
import {useNavigate} from "react-router-dom";
import StudentService from "../Services/StudentService.jsx";

function AddStudentPage(){

    const navigate = useNavigate();

    const[student,setStudent]= useState({
        name:"",
        email:"",
        department:"",
        year:2000,
    });

    const handleChange=(e)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        StudentService.createStudent(student)
            .then(()=>{
                alert("Student successfully added");
                navigate("students")
            }).catch((error)=>{
                console.error("Error adding student:",error);
        });
    };

    return (
        <div style={{paddingTop: "50px"}}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="department"
                    placeholder="department"
                    value={student.department}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={student.year}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add student</button>

            </form>
        </div>
    )
}

export default AddStudentPage;