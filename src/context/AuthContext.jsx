import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)

const authDefault = {
    email: '',
    password: '',
    token: false,
}

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(authDefault)
     // Función para cerrar sesión
     const logout = () => {
        setAuth(authDefault);
    };

    return(
        <AuthContext.Provider value={{auth, setAuth, logout}}>
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