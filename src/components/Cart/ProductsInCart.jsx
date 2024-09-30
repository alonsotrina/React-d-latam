import { Button } from '../index';
import { formatter } from '../../utils/formatters';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { useCart } from '../../context/CartContext';

const ProductsInCart = ({ handleClick }) => {
    const { cart, dispatch } = useCart()

    const handleDelete = (id) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { id }
        });
    };

    const handleIncreaseCount = (id) => {
        dispatch({
            type: "INCREASE_COUNT",
            payload: { id }
        });
    };

    const handleDecreaseCount = (id) => {
        dispatch({
            type: "DECREASE_COUNT",
            payload: { id }
        });
    };
    return (
        <>
            <h2 className="text-lg text-dark-700 col-start-2 col-span-3">Tu carrito ({cart.totalItem})</h2>
            <div className="col-start-2 col-span-3">
                {/* map para listar los productos agregardo al cart */}
                {cart.items.map((item) => (
                    <div
                        className={`grid grid-cols-5 gap-4 px-4 py-5 bg-white border-dark-200 shadow-sm mb-2`}
                        key={item.id}
                    >
                        {/* IMG del producto */}
                        <div className="col-span-1">
                            <img src={item.img} alt={item.name} className="rounded-lg" />
                        </div>

                        {/* Contendido del producto */}
                        <div className="col-span-4">
                            {/* Titulo */}
                            <div className="flex">
                                {/* Nombre y precio */}
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold uppercase text-dark-900">{item.name}</h3>
                                    <h3 className="text-sm"> {formatter.format(item.price)}</h3>
                                </div>

                                {/* btn para eliminar un producto de cart */}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleDelete(item.id)}
                                    className="px-2 text-danger"
                                >
                                    <XMarkIcon className="w-4 h-4" />
                                </Button>
                            </div>

                            {/* Acciiones de la card */}
                            <div className='flex items-center'>
                                <div className="flex">
                                    {/* btn para disminuir la cantidad del producto */}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleDecreaseCount(item.id)}
                                        className="px-1"
                                    >
                                        <MinusIcon />
                                    </Button>

                                    {/* Total del producto */}
                                    <h4 className="text-lg text-dark-700">{item.count}</h4>

                                    {/* btn para aumentar la cantidad del producto */}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleIncreaseCount(item.id)}
                                        className="px-1"
                                    >
                                        <PlusIcon />
                                    </Button>
                                </div>

                                <h4 className="text-lg text-dark-900/80 font-semibold ml-auto">{formatter.format(item.count * item.price)}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="col-span-2 bg-white shadow-sm px-4 py-5 h-[50vh] flex flex-col">
                <h2 className="text-lg font-bold text-dark-900 mb-3">Tu pedido</h2>

                <div className='flex items-center border-b border-dark-300 py-2'>
                    <h2 className="text-sm font-medium text-dark-900">Total de pizzas</h2>
                    <h2 className="text-sm font-medium text-dark-900 ml-auto">{cart.totalItem}</h2>
                </div>

                <div className='flex items-center border-b border-dark-300 py-2'>
                    <h2 className="text-sm font-medium text-dark-900">Descuento asociados</h2>
                    <h2 className="text-sm font-medium text-dark-900 ml-auto">0</h2>
                </div>

                <div className='flex items-center py-2'>
                    <h2 className="text-sm font-medium text-dark-900">Total a pagar</h2>
                    <h2 className="text-sm font-medium text-dark-900 ml-auto">{formatter.format(cart.total)}</h2>
                </div>

                <div className="flex-grow"></div>

                <Button
                    variant="danger"
                    onClick={handleClick}
                    className="w-full"
                >
                    Pagar {formatter.format(cart.total)}
                </Button>
            </div>
        </>
    );
};

export default ProductsInCart;
