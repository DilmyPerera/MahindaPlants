import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryListPage = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await ApiService.getAllCategory();
            setCategories(response.categoryList || [])

        } catch (err) {

            setError(err.response?.data?.message || err.message || 'Unable to fetch categories')

        }
    }

    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`);
    }


}