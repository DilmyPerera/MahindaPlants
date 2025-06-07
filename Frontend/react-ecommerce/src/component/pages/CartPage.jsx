import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cart, dispatch } = useCart();
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const incrementItem = (product) => {
        dispatch({ type: 'INCREMENT_ITEM', payload: product });
    }

}