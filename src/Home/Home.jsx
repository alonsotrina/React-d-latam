import { useState } from "react";
import { pizzas } from "../utils/pizza";
import CardPizza from "../components/Card/CardPizza";
import Header from "../components/Header/Header";
import { Button } from "../components/ui/Buttton";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para agregar un nuevo elemento al Cart
  // Recibiendo un parametro
  const handleAdd = (item) => {
    setCart(temporaryCart => {
      // Método para  verificar si el ID existe en el state 'cart'
      const exists = temporaryCart.some(cartItem => cartItem.id === item.id);

      // Variable para almacenar cada vez que se actualiza el state 'cart'
      let updatedCart;
      // If para preguntar si el id existe en state 'cart'
      if (exists) {
        // Si existe, aumenta el count del producto
        updatedCart = temporaryCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      } else {
        // Si no se agregra un nuevo producto a cart
        updatedCart = [...temporaryCart, { ...item, count: 1 }];
      }
  
      // Función para calcula el total 
      handleTotal(updatedCart);
      // Se retorna la actualización de la copia del cart
      return updatedCart;
    });
  };
  
  // Función para calcular el toral $ del state Cart
  // Recibiendo un parametro
  const handleTotal = (cart) => {
    // Método para calcular el precio total
    // recorriendo el parametro y almacenando el resulatado de price * count  
    const totalPagar = cart.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    const totalItem = cart.reduce(
      (acc, item) => acc + item.count,
      0
    );

    console.log('totalItem',totalItem )

    // Con el resulatdo de total, actulizamos el valor del state 'total
    setTotal(totalPagar);
  };

  return (
    <>
      <Header
        title="Pizzería Mamma Mia"
        description="¡Tenemos las mejores pizzas que podrás encontras!"
      />

      <div className="app-container">
        <div className="grid grid-cols-2 gap-4">
          {pizzas?.map((item) =>
            <CardPizza 
              key={item.id} 
              item={item} 
              onClick={handleAdd}
              temporaryCart={cart} 
              setTemporaryCart={setCart}
              totalCart={total}
              handleTotal={handleTotal}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
