import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";


function App() {
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
    )
}

export default App;
