import Cart from "../Cart/Cart";
import { Button } from "../ui/Buttton";
import { PlusIcon } from "@radix-ui/react-icons";
import { formatter } from "../../utils/formatters";

const CardPizza = ({
    item,
    onClick,
    temporaryCart,
    setTemporaryCart,
    totalCart,
    handleTotal,
}) => {
    // Desestructuración del prop item
    const { name, desc, img, ingredients, price } = item;

    return (
        <div className="grid grid-cols-3 gap-4 bg-white rounded-lg place-items-stretch shadow-lg hover-card-default">
            {/* IMG del producto */}
            <img src={img} alt={name} className="rounded-l-lg h-full w-full object-cover aspect-[16/9]" />

            {/* contenido card */}
            <div className="col-span-2 py-5 pr-3">
                {/* titulo principal*/}
                <div className="flex">
                    {/* nombre */}
                    <h2 className="text-md text-dark-700 lg:text-lg 2xl:text-xl font-semibold text-yellow-400 uppercase flex-1">{name}</h2>
                    {/* precio */}
                    <h2 className="text-2xl text-dark-700 font-bold text-end">{formatter.format(price)}</h2>
                </div>

                {/* descripción */}
                <p className="text-gray-600 text-[10px] my-2">{desc.slice(0, 185)}...</p>

                {/* lista de ingredientes */}
                <div className="flex flex-wrap">
                    <h5 className="text-sm font-medium text-yellow-400 mr-2">🍕 Ingredientes:</h5>
                    {/* map para listar ingredientes */}
                    {ingredients.map((item, i) => (
                        <h5 key={i} className="text-sm font-medium mr-2">
                            {item}
                        </h5>
                    ))}
                </div>

                {/* acciones de la card */}
                <div className="flex justify-end space-x-3  mt-3">
                    {/* btn para ver el detalle */}
                    <Button variant="outline_dark" size="sm" className="py-4">
                        Ver
                    </Button>

                    {/* btn para agregar un elemento al carrito */}
                    <Cart
                        triggerButton={
                            <Button
                                variant="dark"
                                size="icon"
                                onClick={() => onClick(item)}
                                className="px-2"
                            >
                                <PlusIcon />
                            </Button>
                        }
                        totalCart={totalCart}
                        handleTotal={handleTotal}
                        temporaryCart={temporaryCart}
                        setTemporaryCart={setTemporaryCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardPizza;
