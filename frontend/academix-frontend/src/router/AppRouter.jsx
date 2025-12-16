import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import StudentsPage from "../pages/StudentsPage.jsx";
import AddStudentPage from "../pages/AddStudentPage.jsx";
import NavBar from "../components/NavBar";
import UpdateStudentPage from "../pages/UpdateStudentPage.jsx";
import ModulesPage from "../pages/ModulesPage.jsx";
import AddModulePage from "../pages/AddModulePage.jsx";
import EditModulePage from "../pages/EditModulePage.jsx";
import EnrollmentPage from "../pages/EnrollmentPage.jsx";
import EnrollmentModulesPage from "../pages/EnrollmentModulesPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <div style={{width: "100%", minHeight: "100vh"}}>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Students" element={<StudentsPage/>}/>
                    <Route path="/Students/add" element={<AddStudentPage />} />
                    <Route path="/edit-student/:id" element={<UpdateStudentPage />} />
                    <Route path="/modules" element={<ModulesPage/>}/>
                    <Route path="/modules/add" element={<AddModulePage/>}/>
                    <Route path="/edit-module/:id" element={<EditModulePage/>}/>
                    <Route path="/enrollments" element={<EnrollmentPage />} />
                    <Route path="/my-modules" element={<EnrollmentModulesPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
