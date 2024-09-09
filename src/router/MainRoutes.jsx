import { Routes, Route} from "react-router-dom";
import { Home, PizzaDetail, LoginPage, RegisterPage, NotFound, Profile, Cart } from '../views'


const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<PizzaDetail />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default MainRoutes