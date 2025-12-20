import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import StudentService from "../Services/StudentService.jsx";

function UpdateStudentPage(){

    const { id } = useParams();

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
        StudentService.updateStudent(id,student)
            .then(()=>{
                alert("Student successfully updated");
                navigate("/Students")
            }).catch((error)=>{
            console.error("Error adding student:",error);
        });
    };

    useEffect(() => {
        StudentService.getStudentById(id)
            .then((response) => {
                setStudent(response.data)
            })
            .catch((error)=>{
                console.error("Error fetching student:",error);
            })
    }, [id]);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "80px",
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#cdd0cf",
            boxSizing: "border-box",
        }}>
            <h2 style={{ marginBottom: "20px", color: "#333" }}>Update Student</h2>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "90%",
                maxWidth: "500px",
                padding: "30px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ fontWeight: "bold", color: "#555" }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={student.name}
                        onChange={handleChange}
                        required
                        style={{
                            padding: "12px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "2px solid #ccc",
                            transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#2852bc"}
                        onBlur={(e) => e.target.style.borderColor = "#ccc"}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ fontWeight: "bold", color: "#555" }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={student.email}
                        onChange={handleChange}
                        required
                        style={{
                            padding: "12px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "2px solid #ccc",
                            transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#2852bc"}
                        onBlur={(e) => e.target.style.borderColor = "#ccc"}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ fontWeight: "bold", color: "#555" }}>Department</label>
                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={student.department}
                        onChange={handleChange}
                        required
                        style={{
                            padding: "12px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "2px solid #ccc",
                            transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#2852bc"}
                        onBlur={(e) => e.target.style.borderColor = "#ccc"}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <label style={{ fontWeight: "bold", color: "#555" }}>Year</label>
                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        value={student.year}
                        onChange={handleChange}
                        required
                        style={{
                            padding: "12px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "2px solid #ccc",
                            transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#2852bc"}
                        onBlur={(e) => e.target.style.borderColor = "#ccc"}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: "14px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        borderRadius: "4px",
                        background: "#2852bc",
                        color: "white",
                        cursor: "pointer",
                        transition: "background 0.3s",
                        marginTop: "10px",
                        border: "none",
                        width: "100%"
                    }}
                    onMouseEnter={(e) => e.target.style.background = "#1e3d8f"}
                    onMouseLeave={(e) => e.target.style.background = "#2852bc"}
                >
                    Update Student
                </button>
            </form>
        </div>
    )
}

export default UpdateStudentPage;