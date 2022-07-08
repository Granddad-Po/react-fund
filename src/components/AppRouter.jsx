import React, {useContext} from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext)

    return (
        <>
            <Router>
                <Navbar/>
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
                    <Route path="/*" element={<Login to="/login" replace/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;