import { useCart } from "../context/CartContext"
import CardPizza from "../components/Card/CardPizza";

const HomePage = () => {
  const { setCart, data, loading, error, setTotal, setTotalItem} = useCart()

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

    const totalItemCart = cart.reduce(
      (acc, item) => acc + item.count,
      0
    );

    // Total de productos del cart
    setTotalItem(totalItemCart)

    // Con el resulatdo de total, actulizamos el valor del state 'total
    setTotal(totalPagar);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div className="app-container center">Error: {error}</div>;
  }

  return (
      <div className="app-container">
        <h2 className="text-lg font-bold text-dark-900 mb-3">🍕 Promociones</h2>
        <div className="grid grid-cols-2 gap-4">
          {data?.map((item) =>
            <CardPizza
              key={item.id}
              item={item}
              onClick={handleAdd}
              handleTotal={handleTotal}
            />
          )}
        </div>
      </div>
  );
};

export default HomePage;
