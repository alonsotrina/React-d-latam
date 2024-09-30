import { Link, Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export const InternalLayout = () => {
    const location = useLocation();
    return (
        <>
            <Navbar className="bg-dark-900" />

            <main>
                <div className="app-container pb-0">
                    <div className="flex items-center">
                        <Link to="/" className="font-semibold text-[11px] underline text-secondary hover:text-secondary/50">
                            Home
                        </Link>

                        <p className="text-[11px] mx-2">
                           {'>'}
                        </p>

                        <p className="font-semibold text-[11px] text-secondary/50">
                            {location.pathname.replace(/^\//, '')}
                        </p>
                    </div>
                </div>

                <Outlet />
            </main>

            <Footer copyright="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados" />
        </>
    );
};