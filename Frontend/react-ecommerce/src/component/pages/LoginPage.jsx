import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
}