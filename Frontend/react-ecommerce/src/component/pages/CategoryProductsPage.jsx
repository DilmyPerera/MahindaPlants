import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../service/ApiService";

const CategoryProductsPage = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);
    const itemsPerPage = 8;

    useEffect(() => {
        fetchProducts();
    }, [categoryId, currentPage]);

    const fetchProducts = async () => {
        try {

            const response = await ApiService.getAllProductsByCategoryId(categoryId);
            const allProducts = response.productList || [];
            setTotalPages(Math.ceil(allProducts.length / itemsPerPage));
            setProducts(allProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        } catch (error) {
            setError(error.response?.data?.message || error.message || 'unable to fetch products by categoty id')
        }
    }

}