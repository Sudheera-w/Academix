import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

const StudentService = {
    getAllStudents: () => axios.get(API_URL),
    getStudentById: (id) => axios.get(`${API_URL}/${id}`),
    createStudent: (student) => axios.post(API_URL, student),
    updateStudent: (id, student) => axios.put(`${API_URL}/${id}`, student),
    deleteStudent: (id) => axios.delete(`${API_URL}/${id}`),
};

export default StudentService;