import Header from '../components/Header/Header'
import { formatter } from '../utils/formatters';
// import { pizzaCart } from '../utils/pizza';
import { Button } from '../components';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { useCart } from '../context/CartContext';

const Cart = () => {

  const { total, cart, setCart, handleTotal } = useCart()

  const handleAumentar = (data) => {
    setCart((prevcart) => {
      // Actualiza el count del ítem específico
      const updatedCart = prevcart.map((item) =>
        item.id === data ? { ...item, count: item.count + 1 } : item
      );

      // Calcula el total con el carrito actualizado
      handleTotal(updatedCart);

      return updatedCart;
    });
  };

  const handleDisminuir = (data) => {
    setCart((cart) => {
      // Actualiza el count del ítem específico
      const updatedCart = cart.map((item) => {
        if (item.id === data) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });

      // Filtra los ítems con count menor a 1
      const filteredCart = updatedCart.filter((item) => item.count > 0);

      // Retorna el carrito filtrado
      handleTotal(filteredCart);
      return filteredCart;
    });
  };

  const eliminar = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    handleTotal(updatedCart);
  };

  return (
    <div>
      <Header
        title="Carrito de comprar"
      />

      <div className="app-container grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-3">
          <div className="h-[80vh] lg:h-[70vh] xl:h-[80vh] overflow-scroll">
            {/* map para listar los productos agregardo al cart */}
            {cart.map((item, index) => (
              <div
                className={`grid grid-cols-5 gap-2 py-5 border-b border-dark-300 ${index === cart.length - 1 ? 'border-none' : ''}`}
                key={item.id}
              >
                {/* IMG del producto */}
                <div className="col-span-2">
                  <img src={item.img} alt={item.name} className="rounded-lg" />
                </div>

                {/* Contendido del producto */}
                <div className="col-span-3 last:border-b-0">
                  {/* Titulo */}
                  <div className="flex">
                    {/* Nombre y precio */}
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold uppercase">{item.name}</h3>
                      <h3 className="text-sm"> {formatter.format(item.price)}</h3>
                    </div>

                    {/* btn para eliminar un producto de cart */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => eliminar(item.id)}
                      className="px-2 text-danger"
                    >
                      Eliminar
                    </Button>
                  </div>

                  {/* Acciiones de la card */}
                  <div className="flex justify-center mt-3 py-1 border-t border-dark-100">
                    {/* btn para disminuir la cantidad del producto */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDisminuir(item.id)}
                      className="px-1"
                    >
                      <MinusIcon />
                    </Button>

                    {/* Total del producto */}
                    <h4 className="text-xl font-normal mx-2">{item.count}</h4>

                    {/* btn para aumentar la cantidad del producto */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAumentar(item.id)}
                      className="px-1"
                    >
                      <PlusIcon />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>

        <div className="col-span-2">
          {/* Total a pagar */}
          <h2 className="text-lg font-bold text-dark-900 mb-3">Total de tu compra: {formatter.format(total)}</h2>
          <Button
            variant="default"
            size="sm"
          >
            Pagar
          </Button>

        </div>
      </div>
    </div>
  )
}

export default Cart