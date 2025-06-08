import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {

    const { categoryId } = useParams();
    const [name, setName] = useState('')
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategory(categoryId);
    }, [categoryId])


}

export default EditCategory;