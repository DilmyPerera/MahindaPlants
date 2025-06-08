import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {

    const { categoryId } = useParams();
    const [name, setName] = useState('')
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
}

export default EditCategory;