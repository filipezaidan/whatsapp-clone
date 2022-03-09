//Libraries
import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router'
import { AuthContext } from '../contexts/auth';

const ProtectedRoutes = () => {
    const { signed } = useContext(AuthContext);
    return signed ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes;