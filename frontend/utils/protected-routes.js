import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth.jsx';

const ProtectedRoutes = ({ children }) => {

	// BRING IN AUTH CONTEXT
	const useAuth = () => { return useContext(AuthContext); };

	// BRING IN HOOKS
	const { isAuthenticated, isLoading } = useAuth();
	const router = useRouter();
	const currentPath = router.pathname;
	const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

	// IF NOT AUTHENTICATED REDIRECT TO LOGIN
	useEffect(() => {
		if (!isLoading && !isAuthenticated && environment !== 'production') {
			router.push('/login');
		};
	}, [isAuthenticated, isLoading]);

	useEffect(() => {
		if (!isLoading && isAuthenticated && environment !== 'production' && currentPath === '/login') {
			router.push('/');
		};
	}, [isAuthenticated, isLoading]);

	// IF PRODUCTION ENVIRONMENT SHOW PAGE
	if (environment === 'production') {
		return children;
	};

	// IF USER IS ON LOGIN PAGE ALREADY SHOW PAGE
	if (currentPath === '/login') {
		return children;
	};

	// IF PAGE IS LOADING DONT RENDER
	if (isLoading || !isAuthenticated) {
		return null;
	};

	// IF ALL CHECKS PASSED SHOW PAGE
	return children;

};

export default ProtectedRoutes;
