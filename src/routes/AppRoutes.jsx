
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Products from '../components/products/Products';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={'login'} />} />
                <Route path="login" element={<Login />} />
                <Route path="products" element={<Products />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
