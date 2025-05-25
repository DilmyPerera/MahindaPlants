import axios from "axios";

export default class ApiService {

    static BASE_URL = "http://localhost:3000";

    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }
}