import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';

const ProtectedRoute = ({ children }) => {
    const { logado } = useContext(AuthContext);
    if (!logado) {
        return <Navigate to="/Loginaorus" />;
    }
    return children;
};

export default ProtectedRoute;
