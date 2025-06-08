import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

const AddressPage = () => {

    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        if (location.pathname === '/edit-address') {
            fetchUserInfo();
        }
    }, [location.pathname]);

    const fetchUserInfo = async () => {
        try {
            const response = await ApiService.getLoggedInUserInfo();
            if (response.user.address) {
                setAddress(response.user.address)
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message || "unable to fetch user information")
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }))
    }

    const handSubmit = async (e) => {
        e.preventDefault();
        try {
            await ApiService.saveAddress(address);
            navigate("/profile")
        } catch (error) {
            setError(error.response?.data?.message || error.message || "Failed to save/update address")
        }
    }

    return (
        <div>
            <h2>{location.pathname === '/edit-address' ? 'Edit Address' : "Add Addresss"}</h2>
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handSubmit}>

            </form>
        </div>
    );
}