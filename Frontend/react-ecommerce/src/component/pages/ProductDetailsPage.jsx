import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import ApiService from "../../service/ApiService";


const ProductDetailsPage = () => {
    const { productId } = useParams();
    const { cart, dispatch } = useCart();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [productId])

    const fetchProduct = async () => {
        try {
            const response = await ApiService.getProductById(productId);
            setProduct(response.product);

        } catch (error) {
            console.log(error.message || error)
        }
    }

    const addToCart = () => {
        if (product) {
            dispatch({ type: 'ADD_ITEM', payload: product });
        }
    }


    const incrementItem = () => {
        if (product) {
            dispatch({ type: 'INCREMENT_ITEM', payload: product });

        }
    }

    const decrementItem = () => {
        if (product) {
            const cartItem = cart.find(item => item.id === product.id);
            if (cartItem && cartItem.quantity > 1) {
                dispatch({ type: 'DECREMENT_ITEM', payload: product });
            } else {
                dispatch({ type: 'REMOVE_ITEM', payload: product });
            }

        }
    }


    if (!product) {
        return <p>Loading product details ...</p>
    }


    const cartItem = cart.find(item => item.id === product.id);


}