import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
    currentUser: any;
    isAuthenticated: boolean;
    loading: boolean;
}

// const User = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null;
const getUser = () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    // const context = useContext(AuthContext);
    // if (context === undefined) {
    //     throw new Error("useAuth must be used within an AuthProvider");
    // }
    // return context;
    return useContext(AuthContext)!;
}

function AuthProvider({ children }: { children: ReactNode }) {

    const [currentUser, setCurrentUser] = useState<any>(getUser());
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        
        const unsusbcribe = onAuthStateChanged(auth, initializeUser);
        return unsusbcribe;

    }, [])

    async function initializeUser(user: any) {
        try {
            if (user) {
                setCurrentUser(user);
                setIsAuthenticated(true);
                sessionStorage.setItem('user', JSON.stringify(user));
            } else {
                setCurrentUser(null);
                setIsAuthenticated(false);
            }
        } catch (error: any) {
            console.log(error);
            // setError(error);
        } finally {
            setLoading(false);
        }
    }

    const value = {
        currentUser,
        isAuthenticated,
        loading
    }

    return (

        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider };