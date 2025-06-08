import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

const ProfilePage = () => {

    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {

        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {

        try {
            const response = await ApiService.getLoggedInUserInfo();
            setUserInfo(response.user);
        } catch (error) {
            setError(error.response?.data?.message || error.message || 'Unable to fetch user info');
        }
    }

    const orderItemList = userInfo.orderItemList || [];

    const totalPages = Math.ceil(orderItemList.length / itemsPerPage);

}