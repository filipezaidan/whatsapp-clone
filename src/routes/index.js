//Libraries
import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from './protected';
//Contexts
import { AuthContext } from '../contexts/auth';
//Pages
import Home from '../pages/Home';
import Login from '../pages/Login';

function RoutesWrapper() {
    const { signed } = useContext(AuthContext);
    return (
        <Routes>
            <Route exact path="/" element={signed ? <Home /> : <Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route exact path="/home" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default RoutesWrapper;