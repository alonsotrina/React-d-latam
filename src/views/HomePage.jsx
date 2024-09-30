import { useCart } from "../context/CartContext"
import CardPizza from "../components/Card/CardPizza";

const HomePage = () => {
  const { data, loading, error } = useCart()

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
          // onClick={handleAdd}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
