import { useEffect, useState } from "react";
import {isRouteErrorResponse, useNavigate} from "react-router-dom";
import ModuleService from "../services/ModuleService";

function ModulesPage() {
    const [modules, setModules] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ModuleService.getAllModules()
            .then(response => setModules(response.data))
            .catch(error => console.error("Error fetching modules:", error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this module?")) {
            ModuleService.deleteModule(id)
                .then(() => setModules(modules.filter(m => m.id !== id)))
                .catch(error => console.error("Unable to delete module", error));
        }
    };

    return (
        <div style={{ paddingTop: "50px", textAlign: "center" }}>
            <h1>Modules</h1>
            <table border="2" cellPadding="10" style={{ margin: "20px auto", minWidth: "600px", textAlign: "center" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Credits</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {modules.map(module => (
                    <tr key={module.id}>
                        <td>{module.name}</td>
                        <td>{module.code}</td>
                        <td>{module.credits}</td>
                        <td>{module.department}</td>
                        <td>
                            <button onClick={() => navigate(`/edit-module/${module.id}`)}>Edit</button>
                            <button onClick={() => handleDelete(module.id)} style={{ marginLeft: "10px" }}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ModulesPage;
