import '../styles/main.scss'
import ProtectedRoutes from 'utils/protected-routes';
import { AuthProvider } from 'contexts/auth';

const App = ({ Component, pageProps }) => {

  return (
        <AuthProvider>
          <ProtectedRoutes>
            <Component {...pageProps} />
          </ProtectedRoutes>
        </AuthProvider>
  );

};

export default App
