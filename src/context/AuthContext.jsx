import { createContext, useContext, useEffect, useState } from "react";
import { useIsOpen } from "../hooks/Index";

export const AuthContext = createContext(null)
const urlBase = "http://localhost:5100/api";
const initialStateToken = localStorage.getItem("token") || null;

const initialState = JSON.parse(localStorage.getItem("auth")) || {
    id: null,
    email: '',
    token: null,
    msg: '',
    showMsg: false,
};

const AuthProvider = ({ children }) => {
    const { state, toggle } = useIsOpen()
    const [auth, setAuth] = useState(initialState)

    console.log('auth', auth)

    // Este useEffect inicializa el estado auth con el token si existe en localStorage
    useEffect(() => {
        if (auth.token) {
            validarProfile(auth.token)
            localStorage.setItem("auth", JSON.stringify(auth));
        } else {
            localStorage.removeItem("auth");
        }
    }, [auth.token]);


    useEffect(() => {
        if (auth.showMsg) {
            const timer = setTimeout(() => {
                setAuth((prevAuth) => ({
                    ...prevAuth,
                    showMsg: false,
                }));
            }, 3000); // 3000 ms = 3 segundos

            // Limpia el temporizador cuando se desmonte o cambie auth2
            return () => clearTimeout(timer);
        }
    }, [auth.showMsg]);

    const validarLogin = async (email, password) => {
        try {
            const response = await fetch(`${urlBase}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setAuth({
                    msg: errorData.error,
                    showMsg: true
                })
                return
            }

            const data = await response.json();

            setAuth({
                token: data.token,
                msg: 'Registro exitoso',
                showMsg: false
            })

            // Cerrar modal inicar sesión 
            toggle('dialogOpen')

            return data;
        }
        catch (error) {
            setAuth({
                email: '',
                token: initialStateToken,
                msg: `Error: ${error.message || "Problema de conexión"}`,
                showMsg: true
            })
        }
    };

    // Validar register
    const validarRegister = async (email, password) => {
        try {
            const response = await fetch(`${urlBase}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setAuth((prevAuth) => ({
                    ...prevAuth,
                    msg: errorData.error || "Error al registrar el usuario",
                    showMsg: true,
                }));
                return
            }

            const data = await response.json();

            setAuth({
                msg: 'Usuario registrado con exito.',
                showMsg: true
            })

            return data;
        }
        catch (error) {
            setAuth({
                msg: `Error: ${error.message || "Problema de conexión"}`,
                showMsg: true
            })
        }
    };

    const validarProfile = async (token) => {
        try {
            const response = await fetch(`${urlBase}/auth/me`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
          
            if (!response.ok) {
                const errorData = await response.json();
                setAuth((prevAuth) => ({
                    ...prevAuth,
                    msg: errorData.error || "Error desconocido al obtener el perfil",
                    showMsg: true,
                }));
                return
            }

            const data = await response.json();

            setAuth((prevAuth) => {
                const updatedAuth = {
                    ...prevAuth,
                    id: data.id,
                    email: data.email,
                };
    
                localStorage.setItem("auth", JSON.stringify(updatedAuth));
                return updatedAuth;
            });
            return data;
        }
        catch (error) {
            setAuth((prevAuth) => ({
                ...prevAuth,
                msg: `Error: ${error.message || "al traer los datos del perfil"}`,
                showMsg: true,
            }));
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        setAuth(initialState)
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value={{ auth, logout, validarLogin, validarRegister, state, toggle }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
}

export default AuthProvider