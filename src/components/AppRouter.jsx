import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import {routes} from "../routes/routes";

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    {routes.map(route =>
                        <Route
                            path={route.path}
                            element={<route.element/>}
                        />
                    )}
                    <Route path="/*" element={<Error to="/error" replace/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;