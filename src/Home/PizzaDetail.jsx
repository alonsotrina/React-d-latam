import useFetch from '../hooks/useFetch'
import { formatter } from "../utils/formatters";
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Buttton';
import { PlusIcon } from "@radix-ui/react-icons";

const PizzaDetail = () => {
    const urlBase = "http://localhost:5100/api/pizzas"
    const { data, loading, error } = useFetch(`${urlBase}/p001`)
    const { name, desc, img, ingredients, price } = data;

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div className="app-container center">Error: {error}</div>;
    }

    return (
        // Renderizar la información de una pizza.
        <div className="grid grid-cols-8 bg-dark-900 gap-5 rounded-lg place-items-stretch shadow-lg hover-card-default">
            <div className="relative col-span-3 h-full">
                <img
                    src={img}
                    alt={name}
                    className="rounded-l-lg h-full w-full object-cover aspect-[16/9] 2xl:max-h-[280px]"
                />
                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900/30 from-10% via-dark-900/60 via-80% to-dark-900 to-100% rounded-l-lg"></div>
            </div>

            <div className="col-span-5 text-white py-5 pr-8">
                <Badge variant="warning" size="default" className="mb-3">Destacado</Badge>

                {/* título principal */}
                <div className="flex">
                    {/* nombre */}
                    <h2 className="text-2xl font-semibold text-yellow-400 uppercase flex-1">{name}</h2>
                    {/* precio */}
                    <h2 className="text-4xl font-bold text-end">{formatter.format(price)}</h2>
                </div>

                {/* descripción */}
                <p className="text-gray-600 leading-relaxed text-sm my-3">{desc}</p>

                {/* lista de ingredientes */}
                <div className="flex flex-wrap">
                    <h5 className="text-[10px] font-medium text-yellow-400 mr-2">🍕 Ingredientes:</h5>
                    {ingredients.map((item, i) => (
                        <h5 key={i} className="text-[10px] font-medium mr-2">
                            {item}
                        </h5>
                    ))}
                </div>

                {/* acciones de la card */}
                <div className="flex justify-end space-x-3 mt-3">
                    <Button variant="light_outline" size="sm" className="py-4">
                        Ver
                    </Button>

                    <Button variant="danger" size="icon" className="px-2">
                        <PlusIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PizzaDetail