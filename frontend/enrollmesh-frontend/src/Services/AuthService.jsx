import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

const AuthService = {
    login: (credentials) => axios.post(`${API_URL}/login`, credentials),
    signup: (userData) => axios.post(`${API_URL}/signup`, userData),
};

export default AuthService;
