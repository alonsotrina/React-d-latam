import { Link } from "react-router-dom";
import { Badge } from "../ui/Badge"
import { ShoppingCart } from 'lucide-react';


const NavbarComponets = ({ totalItem }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 absolute top-0 left-0 right-0 z-10 bg-dark-900/20">
      <Link to="/">
        <h2 className="font-semibold text-xl tracking-tight text-white mr-6">Pizzería Mamma Mia</h2>
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
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div className="text-sm lg:flex-grow">
          <Link to="login" className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-semibold mr-3">login</Link>
          <Link to="register" className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-semibold mr-3">Register</Link>
          <Link to="profile" className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-semibold mr-3">Profile</Link>
        </div>
        <div>

          <Link to="cart" className="inline-flex text-sm px-2 py-2 leading-none rounded text-white bg-warning hover:border-transparent hover:text-dark-700 hover:bg-white mt-4 lg:mt-0" >
            <ShoppingCart size={16} color="#000" />
            {totalItem > 0 ? <Badge variant="danger" size="default" className="mx-2">{totalItem}</Badge> : null}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponets;
