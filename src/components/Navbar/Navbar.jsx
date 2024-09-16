import { useCart } from "../../context/CartContext"
import { Link, NavLink } from "react-router-dom";
import { Badge } from '../index';
import { ShoppingCart } from 'lucide-react'
import { formatter } from '../../utils/formatters';
import { useAuth } from "../../context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../index"


const NavbarComponets = ({ className }) => {
  const { total, totalItem } = useCart()
  const { auth, logout } = useAuth()

  const setActiveClass = ({ isActive }) => (isActive ? "nav-active nav-link" : 'nav-link');

  return (
    // <nav className="flex items-center justify-between flex-wrap p-6 absolute top-0 left-0 right-0 z-10 bg-dark-900/20">
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
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div className="text-sm lg:flex-grow">
          {auth.token ? null : <NavLink to="login" className={setActiveClass}>login</NavLink>}
          {auth.token ? null : <NavLink to="register" className={setActiveClass}>Register</NavLink>}
          {auth.token ? <NavLink to="profile" className={setActiveClass}>Profile</NavLink> : null}
          {auth.token ? <Link to="/" className="nav-link" onClick={logout}>Cerrar sesión</Link> : null}
        </div>

        <div className="flex items-center">

          {/* <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-danger text-white border-none min-w-[200px] mr-8 px-0">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="border border-primary"  />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <Link to="cart" className="inline-flex text-sm px-2 py-2 leading-none rounded text-white bg-warning hover:border-transparent hover:text-dark-700 hover:bg-white mt-4 lg:mt-0" >
            <ShoppingCart size={16} color="#000" />
            {totalItem > 0 ? <Badge variant="danger" size="default" className="mx-2">{totalItem}</Badge> : null}
            {/* {formatter.format(total)} */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponets;
