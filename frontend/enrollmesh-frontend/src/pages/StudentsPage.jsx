import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import StudentService from "../Services/StudentService.jsx";

function StudentsPage(){

    const navigate = useNavigate();
    const [students,setStudents]= useState([])

    useEffect(()=>{
        StudentService.getAllStudents().then((response)=>{setStudents(response.data);})
        .catch((error)=>{console.error("Error fetching students:",error)});
    },[])

    const handleDelete = (id) => {
        if(confirm("Are you sure you want to delete this student?")){
        StudentService.deleteStudent(id)
            .then(()=>{
                setStudents(students.filter((student)=>(student.id !== id)));
            })
            .catch((error)=>console.log("Unable to delete student",error));
    }}


    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "80px",
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#cdcfcf",
            boxSizing: "border-box",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                maxWidth: "900px",
                marginBottom: "20px",
            }}>
                <h2 style={{ fontSize: "35px", color: "#333", margin: 0 }}>Students</h2>
                <button
                    style={{
                        whiteSpace: "nowrap",
                        padding: "10px 24px",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "6px",
                        background: "#2852bc",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                    onClick={() => navigate("/Students/add")}
                    onMouseEnter={(e) => {
                        e.target.style.background = "#1d3d8f";
                        e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = "#2852bc";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    + Add Student
                </button>
            </div>
            <table
                border="2"
                cellPadding="10"
                style={{
                    marginTop: "20px",
                    width: "90%",
                    maxWidth: "900px",
                    borderCollapse: "collapse",
                    backgroundColor: "#676767",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    textAlign: "center",
                }}
            >
                <thead style={{ backgroundColor: "#2852bc", color: "#ffffff" }}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {students.map((student)=>(
                    <tr key = {student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.department}</td>
                        <td>{student.year}</td>
                        <td>
                            <button 
                                style={{
                                    padding: "5px 16px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    borderRadius: "4px",
                                    background: "#1bec8a",
                                    color: "black",
                                    cursor: "pointer",
                                    transition: "background 0.3s",
                                    border: "none"
                                }}
                                onClick={()=>navigate(`/edit-student/${student.id}`)}
                                onMouseEnter={(e) => e.target.style.background = "#00ca6b"}
                                onMouseLeave={(e) => e.target.style.background = "#1beb89"}
                            >Edit</button>
                            <button
                                style={{
                                    padding: "5px 14px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    borderRadius: "4px",
                                    marginLeft: "10px",
                                    background: "#cd0000",
                                    color: "white",
                                    cursor: "pointer",
                                    transition: "background 0.3s",
                                    border: "none"
                                }}
                                onClick={() => handleDelete(student.id)}
                                onMouseEnter={(e) => e.target.style.background = "#a00000"}
                                onMouseLeave={(e) => e.target.style.background = "#cd0000"}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsPage;