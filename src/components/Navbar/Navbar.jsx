import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from 'lucide-react'
import { Badge, UserMenu, SignInModal } from "../index"

const NavbarComponets = ({ className }) => {
  const { cart } = useCart()
  const { auth, logout, state, toggle } = useAuth()
  const setActiveClass = ({ isActive }) => (isActive ? "nav-active nav-link" : 'nav-link');

  return (
    <>
      <nav className={`flex items-center justify-between flex-wrap p-6 ${className}`}>
        <Link to="/" className="font-semibold text-xl tracking-tight text-white mr-6">
          Pizzería Mamma Mia
        </Link>

        <div className="block lg:hidden">
          <button
            id="boton"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          id="menu"
          className="flex items-center"
        >

          <div className="flex items-center lg:flex-grow">
            <NavLink to="/" className={setActiveClass}>Menú</NavLink>

            <div className="border border-white h-3 mx-1"></div>

            <UserMenu
              auth={auth} 
              logout={logout}
              toggle={toggle}
            />

            <Link to="cart" className="inline-flex text-sm px-2 py-2 leading-none rounded text-white bg-warning hover:border-transparent hover:text-dark-700 hover:bg-white mt-4 lg:mt-0" >
              <ShoppingCart size={16} color="#000" />
              {cart.totalItem > 0 && <Badge variant="danger" size="default" className="mx-2 absolute right-0">{cart.totalItem}</Badge>}
            </Link>
          </div>
        </div>
      </nav>

      <SignInModal
        isOpen={state.dialogOpen} 
        onClose={toggle}
      />
    </>
  );
};

export default NavbarComponets;
