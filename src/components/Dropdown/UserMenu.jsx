import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../index"

const UserMenu = ({ auth, logout, toggle }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="px-2 text-base font-semibold bg-transparente text-white hover:text-white/80">Hola, Inicia sesión</DropdownMenuTrigger>
            <DropdownMenuContent className="border-none min-w-[280px] mr-8 px-0 py-4">
                {auth.token &&
                    <>
                        <DropdownMenuLabel className="flex flex-col">
                            <span>Bienvenido(a)</span>
                            <span>{auth.email}</span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                    </>
                }

                {!auth.token ?
                    <>
                        <DropdownMenuItem onClick={()=> toggle('dialogOpen')}>Iniciar sesión</DropdownMenuItem>
                        <DropdownMenuItem><Link to="register">Registrarse</Link></DropdownMenuItem>
                    </>
                    :
                    <>
                        <DropdownMenuItem><Link to="profile">Ver perfil</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/" onClick={logout}>Cerrar sesión</Link></DropdownMenuItem>
                    </>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserMenu