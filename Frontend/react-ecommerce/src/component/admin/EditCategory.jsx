import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiService from "../../service/ApiService";

const EditCategory = () => {

    const { categoryId } = useParams();
    const [name, setName] = useState('')
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategory(categoryId);
    }, [categoryId])

    const fetchCategory = async () => {
        try {
            const response = await ApiService.getCategoryById(categoryId);
            setName(response.category.name);

        } catch (error) {
            setMessage(error.response?.data?.message || error.message || "Failed to get a category by id")
            setTimeout(() => {
                setMessage('');
            }, 3000)
        }
    }
}

export default EditCategory;