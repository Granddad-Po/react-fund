import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import About from "../pages/About";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/*" element={<Error to="/error" replace />} />
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;