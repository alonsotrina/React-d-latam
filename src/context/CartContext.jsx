import { createContext, useContext, useReducer } from "react";
import { useFetch } from "../hooks/Index";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext()
const urlBase = "http://localhost:5100/api"

// STATE INICIAL
const initialState = {
    items: [],   // Carrito de productos
    total: 0,    // Valor total del carrito
    totalItem: 0,// Cantidad total de productos
    msg: ''
};
 
const CartProvider = ({ children }) => {
    // state para almacenar el valor total del carrito
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    // useFetch para consimir la API de pizzas
    const { data, loading, error } = useFetch(`${urlBase}/pizzas`)

    const validarCheck = async (token, cart) => {
        try {
            const response = await fetch(`${urlBase}/checkouts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(cart),
            });

            if (!response.ok) {
                const errorData = await response.json();
                cart({
                    msg: errorData.error,
                })
                return
            }

            const data = await response.json();
            console.log('data-cart-context', data)
            return data;
        }
        catch (error) {
            cart({
                msg: `Error: ${error.message || "Problema de conexión"}`
            })
        }
    };


    return (
        <CartContext.Provider value={{ data, loading, error, cart, dispatch, validarCheck}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
};

export default CartProvider