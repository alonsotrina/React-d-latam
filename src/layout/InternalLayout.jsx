import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, Header } from '../components';

export const InternalLayout = () => {
    const location = useLocation();
    return (
        <>
            <Navbar className="bg-dark-900" />

            <main>
                <h1>Ruta actual:</h1>
                <p>{location.pathname}</p>

                <Outlet />
            </main>

            <Footer copyright="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados" />
        </>
    );
};