import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Posts/>} />
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
