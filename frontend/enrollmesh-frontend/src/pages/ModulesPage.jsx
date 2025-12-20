import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModuleService from "../services/ModuleService";

function ModulesPage() {

    const navigate = useNavigate();
    const [modules, setModules] = useState([]);

    useEffect(() => {
        ModuleService.getAllModules()
            .then((response) => setModules(response.data))
            .catch((error) => console.error("Error fetching modules:", error));
    }, []);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this module?")) {
            ModuleService.deleteModule(id)
                .then(() => {
                    setModules(modules.filter((module) => module.id !== id));
                })
                .catch((error) =>
                    console.error("Unable to delete module:", error)
                );
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "80px",
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "rgba(244,247,246,0.82)",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90%",
                    maxWidth: "900px",
                    marginBottom: "20px",
                }}
            >
                <h2 style={{ color: "#333", margin: 0 }}>
                    Modules
                </h2>

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
                    onClick={() => navigate("/modules/add")}
                    onMouseEnter={(e) => {
                        e.target.style.background = "#1d3d8f";
                        e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = "#2852bc";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    + Add Module
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
                    <th>Code</th>
                    <th>Credits</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {modules.map((module) => (
                    <tr key={module.id}>
                        <td>{module.name}</td>
                        <td>{module.code}</td>
                        <td>{module.credits}</td>
                        <td>{module.department}</td>

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
                                onClick={() =>
                                    navigate(`/edit-module/${module.id}`)
                                }
                                onMouseEnter={(e) =>
                                    e.target.style.background = "#00ca6b"
                                }
                                onMouseLeave={(e) =>
                                    e.target.style.background = "#1beb89"
                                }
                            >
                                Edit
                            </button>

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
                                onClick={() => handleDelete(module.id)}
                                onMouseEnter={(e) =>
                                    e.target.style.background = "#a00000"
                                }
                                onMouseLeave={(e) =>
                                    e.target.style.background = "#cd0000"
                                }
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ModulesPage;
