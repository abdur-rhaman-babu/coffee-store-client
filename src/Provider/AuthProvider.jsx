import { createContext } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const name = 'Coffee Shop'
    return (
        <AuthContext.Provider value={name}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;