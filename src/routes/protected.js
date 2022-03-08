import { Outlet, Navigate } from 'react-router'
import { AuthContext } from '../contexts/auth';
import { useContext } from 'react';

const ProtectedRoutes = () => {
    const { signed } = useContext(AuthContext);
    return signed ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes;