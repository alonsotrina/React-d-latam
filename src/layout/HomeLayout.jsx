import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Header } from '../components';

export const HomeLayout = () => {
    return (
        <>
            <Navbar className="absolute top-0 left-0 right-0 z-10" />
            <Header
                title="Pizzería Mamma Mia"
                description="¡Tenemos las mejores pizzas que podrás encontras!"
            />
            <main>
                <Outlet />
            </main>

            <Footer copyright="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados" />
        </>
    );
};