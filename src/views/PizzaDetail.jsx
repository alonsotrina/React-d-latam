import { useState } from "react";
import { useFetch } from "../hooks/Index";
import { formatter } from "../utils/formatters";
import { Button } from '../components';
import { useParams } from 'react-router-dom';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { useCart } from "../context/CartContext"

const PizzaDetail = () => {
    const urlBase = "http://localhost:5100/api/pizzas"
    const { id } = useParams();
    const { dispatch } = useCart()
    const { data, loading, error } = useFetch(`${urlBase}/${id}`)
    const { name, desc, img, ingredients, price } = data;
    const [counter, setCounter] = useState(1);

    const handleAddToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...item, count: counter }
        });
    };

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div className="app-container center">Error: {error}</div>;
    }

    return (
        <div className='app-container'>
            {/* <div className="grid grid-cols-8 bg-dark-900 gap-5 rounded-lg place-items-stretch shadow-lg hover-card-default">
                <div className="relative col-span-3 h-full">
                    <img
                        src={img}
                        alt={name}
                        className="rounded-l-lg h-full w-full object-cover aspect-[16/9] 2xl:max-h-[280px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-dark-900/30 from-10% via-dark-900/60 via-80% to-dark-900 to-100% rounded-l-lg"></div>
                </div>

                <div className="col-span-5 text-white py-5 pr-8">
                    <div className="flex">
                        <h2 className="text-2xl font-semibold text-yellow-400 uppercase flex-1">{name}</h2>
                        <h2 className="text-4xl font-bold text-end">{formatter.format(price)}</h2>
                    </div>

                
                    <p className="text-gray-600 leading-relaxed text-sm my-3">{desc}</p>

    
                    <div className="flex flex-wrap">
                        <h5 className="text-[10px] font-medium text-yellow-400 mr-2">🍕 Ingredientes:</h5>
                        {ingredients.map((item, i) => (
                            <h5 key={i} className="text-[10px] font-medium mr-2">
                                {item}
                            </h5>
                        ))}
                    </div>

    
                    <div className="flex justify-end space-x-3 mt-3">
                        <Button variant="light_outline" size="sm" className="py-4">
                            Ver
                        </Button>

                        <Button variant="danger" size="icon" className="px-2">
                            <PlusIcon />
                        </Button>
                    </div>
                </div>
            </div> */}


            <div className="grid grid-cols-8 gap-4 place-items-stretch">
            <img
                        src={img}
                        alt={name}
                        className="rounded-l-lg h-full w-full object-cover aspect-[16/9] max-h-[180px]"
                    />

                <div className="col-span-2 bg-danger">
                    <img
                        src={img}
                        alt={name}
                        className="rounded-l-lg h-full w-full object-cover aspect-[16/9]"
                    />
                </div>

                <div className="col-span-4 bg-white py-5 px-8">
                    {/* <Badge variant="warning" size="default" className="mb-3">Destacado</Badge> */}

                    {/* título principal */}
                    <div className="flex mb-3">
                        <h3 className="text-sm font-medium text-secondary flex-1">Pizza</h3>
                        <h3 className="text-sm font-medium text-secondary text-end">SKU {id}</h3>
                    </div>


                    {/* título principal */}
                    <div className="flex text-dark-700">
                        {/* nombre */}
                        <h2 className="text-2xl font-bold uppercase flex-1">{name}</h2>
                        {/* precio */}
                        <h2 className="text-4xl font-bold text-end">{formatter.format(price)}</h2>
                    </div>


                    {/* descripción */}
                    <p className="text-dark-700 leading-relaxed text-base my-3">{desc}</p>

                    {/* lista de ingredientes */}
                    <h4 className="text-base font-semibold text-dark-700 mb-2">Ingredientes:</h4>

                    <div className="divide-y divide-dark-300 w-full">
                        {ingredients.map((item, i) => (
                            <div key={i} className="text-sm font-medium py-2">
                                {item}
                            </div>

                        ))}
                    </div>



                    {/* Acciiones de la card */}
                    <div className="flex items-center mt-3">
                        {/* btn para disminuir la cantidad del producto */}
                        <Button
                            variant="dark"
                            size="icon"
                            onClick={() => setCounter(counter - 1)}
                            disabled={counter === 1}
                            className={`px-1 ${counter === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            <MinusIcon />
                        </Button>

                        {/* Total del producto */}
                        {/* <h4 className="text-xl font-normal mx-2">{item.count}</h4> */}
                        <h4 className="text-2xl font-normal mx-6">{counter}</h4>

                        {/* btn para aumentar la cantidad del producto */}
                        <Button
                            variant="warning"
                            size="icon"
                            onClick={() => setCounter(counter + 1)}
                            className="p-0"
                        >
                            <PlusIcon />
                        </Button>
                    </div>

                    <h2> total: {price * counter}</h2>

                    <button onClick={() => handleAddToCart(data)}>Agregar Pizza</button>

                    {/* btn para agregar al carrito */}
                    {/* <Button
                        variant="dark"
                        size="default"
                        onClick={() => {
                            handleAdd2(data)
                        }}
                    >
                        agregar  <PlusIcon />
                    </Button> */}
                </div>
            </div>
        </div>
    );
}

export default PizzaDetail