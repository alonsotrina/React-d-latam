import { useState } from 'react';
import { useFetch } from "./hooks/Index";
import { Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './Home/Home'
import PizzaDetail from './Home/PizzaDetail';
import LoginPage from './Home/LoginPage'
import RegisterPage from './Home/RegisterPage'
import NotFound from './Home/NotFound';
import Profile from './Home/Profile';
import Cart from './Home/Cart';

function App() {
  const { data, loading, error } = useFetch('http://localhost:5100/api/pizzas/p001')
  const [total, setTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  console.log('p002', data)

  return (
    <>
      <Navbar totalItem={totalItem} total={total} />
      <Routes>
        <Route path='/' element={<Home setTotalItem={setTotalItem} total={total} setTotal={setTotal} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/p001' element={<PizzaDetail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer copyright="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados" />
    </>
  )
}

export default App
