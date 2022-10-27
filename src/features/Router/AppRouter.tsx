import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {appRoutes} from "./Routes";
import {NEWS_ROUTE} from "../../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {appRoutes.map(route => {
                return <Route path={route.path} element={<route.element/>} key={route.path}/>
            })}
            <Route path="*" element={<Navigate to={NEWS_ROUTE} replace />}/>
        </Routes>
    );
};

export default AppRouter;
