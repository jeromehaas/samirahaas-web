import { createContext, useState, useEffect, useMemo } from 'react';
import { sha256 } from 'js-sha256';

// CREATE CONTEXT
const AuthContext = createContext();

// CREATE PROVIDER
const AuthProvider = ({ children }) => {

	// SETUP STATE
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// LOGIN WITH TOKEN
	const loginWithToken = async () => {
		const developerLoginCode = process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE;
		const token = sha256(developerLoginCode);
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

	// AFTER FIRST RENDER CHECK TOKEN FROM LOCALSTORAGE
	useEffect(() => {
		checkSession();
		setIsLoading(false);
	}, []);

	// MEMORIZE VALUES
	const value = useMemo(() => {
		return { isAuthenticated, isLoading, loginWithToken };
	});

	// RETURN PROVIDER
	return (
		<AuthContext.Provider value={ value }>
			{ children }
		</AuthContext.Provider>
	);

};

// EXPORT PROVIDER AND HOOK
export { AuthProvider, AuthContext };
