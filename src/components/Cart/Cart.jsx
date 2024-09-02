import { Button } from "../ui/Buttton";
import { Link } from "react-router-dom";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
    SheetDescription,
} from "../ui/Sheet";
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { formatter } from '../../utils/formatters';

const Cart = ({
    temporaryCart,
    setTemporaryCart,
    triggerButton,
    totalCart,
    handleTotal,
}) => {

    const handleAumentar = (data) => {
        setTemporaryCart((prevTemporaryCart) => {
            // Actualiza el count del ítem específico
            const updatedCart = prevTemporaryCart.map((item) =>
                item.id === data ? { ...item, count: item.count + 1 } : item
            );

            // Calcula el total con el carrito actualizado
            handleTotal(updatedCart);

            return updatedCart;
        });
    };

    const handleDisminuir = (data) => {
        setTemporaryCart((temporaryCart) => {
            // Actualiza el count del ítem específico
            const updatedCart = temporaryCart.map((item) => {
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
        const updatedCart = temporaryCart.filter((item) => item.id !== id);
        setTemporaryCart(updatedCart);
        handleTotal(updatedCart);
    };

    return (
        <Sheet>
            {/* btn para cerrar carrito */}
            <SheetTrigger asChild>{triggerButton}</SheetTrigger>

            <SheetContent>
                <SheetTitle>Carrito de Compras</SheetTitle>
                <SheetDescription>Aquí puedes ver los productos que has agregado al carrito.</SheetDescription>

                {/* Contenido del carrito */}
                <div className="h-[80vh] lg:h-[70vh] xl:h-[80vh] overflow-scroll">
                    {/* map para listar los productos agregardo al cart */}
                    {temporaryCart.map((item, index) => (
                        <div
                            className={`grid grid-cols-5 gap-2 py-5 border-b border-dark-300 ${index === temporaryCart.length - 1 ? 'border-none' : ''}`}
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

                {/* Total a pagar */}
                <div className="grid grid-cols-2 gap-2 py-4 border-t border-dark-100">
                    {/* Total a pagar */}
                    <h2 className="text-xl">Total: {formatter.format(totalCart)}</h2>
                    {/* btn  pagar */}
                    <Link to="cart">


                        <Button
                            variant="default"
                            size="sm"
                        >
                            Ir al carrito
                        </Button>
                    </Link>
                </div>

            </SheetContent>
        </Sheet>
    );
};

export default Cart;
