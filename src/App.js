//Libraries
import { BrowserRouter } from 'react-router-dom';
//Contexts
import AuthProvider from './contexts/auth';
//Routes
import Routes from './routes'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}