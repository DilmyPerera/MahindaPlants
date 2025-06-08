import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiService from "../../service/ApiService";

const EditProductPage = () => {
    const { productId } = useParams();
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        ApiService.getAllCategory().then((res) => setCategories(res.categoryList));

        if (productId) {
            ApiService.getProductById(productId).then((response) => {
                setName(response.product.name);
                setDescription(response.product.description);
                setPrice(response.product.price);
                setCategoryId(response.product.categoryId);
                setImageUrl(response.product.imageUrl);
            })
        }
    }, [productId]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

}

export default EditProductPage;
