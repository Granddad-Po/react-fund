import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Posts/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/posts/:id" element={<PostIdPage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/*" element={<Error to="/error" replace/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;