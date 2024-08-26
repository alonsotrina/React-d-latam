import { useState } from 'react';
import { useFetch } from "./hooks/Index";
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './Home/Home'
import Header from './components/Header/Header';
import PizzaDetail from './Home/PizzaDetail';
// import LoginPage from './Home/LoginPage'
// import RegisterPage from './Home/RegisterPage'
function App() {
  const { data, loading, error } = useFetch('http://localhost:5100/api/pizzas/p001')
  const [total, setTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  console.log('p002', data)

  return (
    <>
      <Navbar totalItem={totalItem} total={total} />

      <Header
        title="Pizzería Mamma Mia"
        description="¡Tenemos las mejores pizzas que podrás encontras!"
      />

      <PizzaDetail />
      
      <Home setTotalItem={setTotalItem} total={total} setTotal={setTotal} />

    
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Footer copyright="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados" />
    </>
  )
}

export default App
