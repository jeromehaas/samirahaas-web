import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { sha256 } from 'js-sha256';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // SETUP STATE
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);

    // BRIN IN HOOKS
    const router = useRouter();

    // LOGIN WITH TOKEN
    const loginWithToken = async () => {
        const developerLoginCode = process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE;
        const token = sha256(developerLoginCode)
        localStorage.setItem('token', token);
        await setIsAuthenticated(true);
    };
    
    // CHECK SESSION
    const checkSession = () => {
        const token = localStorage.getItem('token');
        if (token === sha256(process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE)) {
            loginWithToken(); 
        };
    };

    // IF PAGE NOT LOADING AND USER IS AUTHENTICATED REDIRECT TO 
    useEffect(() => {
        if (!isLoading && isAuthenticated ) {
            router.push('/');
        };
    }, [ isLoading, isAuthenticated])

    // AFTER FIRST RENDER CHECK TOKEN FROM LOCALSTORAGE
    useEffect(() => {
        checkSession();
        setIsLoading(false);
    }, []);

    // RETURN PROVIDER
    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, loginWithToken }} >
            { children }
        </AuthContext.Provider>
    );

};

// EXPORT PROVIDER AND HOOK
export { AuthProvider, AuthContext };
