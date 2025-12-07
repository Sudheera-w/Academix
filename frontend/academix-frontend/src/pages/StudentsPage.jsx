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
            display:"flex",
            alignItems: "center", 
            flexDirection: "column", 
            paddingTop: "50px", 
            width: "100%",
            boxSizing: "border-box",
            margin: 0
        }}>
            <h1 style={{ textAlign: "center", marginBottom:"20px", width: "100%", marginTop: "10px"}}>Students</h1>
            <table
            border="2"
            cellPadding="10"
            style={{
                width:"90%",
                maxWidth: "900px",
                borderCollapse:"collapse",
                textAlign:"center",
                background:"#2852bc",
                marginTop:"20px",
            }}>
                <thead style={{
                    background:"#000000",
                }}>
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
                                    background: "#680000",
                                    color: "black",
                                    cursor: "pointer",
                                    transition: "background 0.3s",
                                }}
                                onClick={() => handleDelete(student.id)}
                                onMouseEnter={(e) => e.target.style.background = "#640000"}
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