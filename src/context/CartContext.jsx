import { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/Index";

export const CartContext = createContext()
const urlBase = "http://localhost:5100/api/pizzas"

const CartProvider = ({ children }) => {
    // state para almacenar el valor total del carrito
    const [total, setTotal] = useState(0);
    // state para almacenar la cantidad de los productos del carrito
    const [totalItem, setTotalItem] = useState(0);
    // state para almacenar data al carrito
    const [cart, setCart] = useState([]);
    // useFetch para consimir la API de pizzas
    const { data, loading, error } = useFetch(`${urlBase}`)

    // Función para calcular el toral $ del state Cart
    // Recibiendo un parametro
    const handleTotal = (cart) => {
        // Método para calcular el precio total
        // recorriendo el parametro y almacenando el resulatado de price * count  
        const totalPagar = cart.reduce(
            (acc, item) => acc + item.price * item.count,
            0
        );
        // Método para calcular el total de productos
        // recorriendo el parametro y almacenando el resulatado de item * count  
        const totalItemCart = cart.reduce(
            (acc, item) => acc + item.count,
            0
        );
        // Total de productos del cart
        setTotalItem(totalItemCart)
        // Valor total del producto
        setTotal(totalPagar);
    };


    return (
        <CartContext.Provider value={{ total, setTotal, totalItem, setTotalItem, cart, setCart, data, loading, error, handleTotal }}>
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