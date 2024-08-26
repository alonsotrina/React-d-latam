import { Badge } from "../ui/Badge";

const NavbarComponets = ({totalItem, total}) => {
  const token = false;
  // let formatter = new Intl.NumberFormat("es-cl", {
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 0,
  // });

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 absolute top-0 left-0 right-0 z-10">
      <h2 className="font-semibold text-xl tracking-tight text-white mr-6">
        Pizzería Mamma Mia
      </h2>

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
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-semibold mr-4"
          >
            🍕 Home
          </a>

          {/* Variable si existe el token */}
          {token ? (
            <>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-thin mr-4"
              >
                🔓 Profile
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-semibold"
              >
                🔓 Logout
              </a>
            </>
          ) : (
            <>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-semibold mr-4"
              >
                🔐 Login
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-md text-white hover:text-white font-semibold"
              >
                🔐 Register
              </a>
            </>
          )}
        </div>
        <div>
         
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-dark-700 hover:bg-white mt-4 lg:mt-0"
          >
            {total} {totalItem > 0 ? <Badge variant="danger" size="default">{totalItem}</Badge> : null}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponets;
