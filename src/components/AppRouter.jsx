import React, {useContext} from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext)

    return (
        <>
            <Routes>
                {isAuth
                    ? privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.element/>}
                            key={route.path}
                        />
                    )
                    : publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.element/>}
                            key={route.path}
                        />
                    )
                }
            </Routes>
        </>
    );
};

export default AppRouter;