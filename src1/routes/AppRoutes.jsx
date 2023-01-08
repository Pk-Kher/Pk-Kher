
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Create from '../components/User/Create';
import List from '../components/User/List';
import MapList from '../components/User/MapList';
// import Map2 from '../components/map/Map2.tsx';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to={'users'} />} />
                <Route path="users" element={<List />} />
                <Route path="user/create" element={<Create />} />
                <Route path="user/edit/:id" element={<Create />} />
                <Route path="user/map" element={<MapList />} />
                {/* <Route path="user/map2" element={<Map2 />} /> */}
            </Routes>
        </>
    );
};

export default AppRoutes;
