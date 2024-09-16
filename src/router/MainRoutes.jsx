import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PizzaDetail, LoginPage, RegisterPage, NotFound, ProfilePage, CartPage } from '../views'
import { useAuth } from "../context/AuthContext";
import { HomeLayout } from "../layout/HomeLayout";
import { InternalLayout } from "../layout/InternalLayout";


const MainRoutes = () => {
    const { auth } = useAuth()
    console.log('auth', auth.token)
    return (
        <Routes>

            {/* Layout para el Home */}
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<HomePage />} />
            </Route>

            {/* Layout para las rutas internas (login, register, profile, pizza detail) */}
            <Route element={<InternalLayout />}>
                <Route path="login" element={auth.token ? <Navigate to="/" /> : <LoginPage />} />
                <Route path="register" element={auth.token ? <Navigate to="/" /> : <RegisterPage />} />
                <Route path='cart' element={ <CartPage />} />
                <Route path='profile' element={auth.token ? <ProfilePage /> : <Navigate to="/" />} />
                <Route path="pizza-detail/:id" element={<PizzaDetail />} />
            </Route>

            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default MainRoutes