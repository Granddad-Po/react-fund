import React, {useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import Navbar from "./components/UI/Navbar/Navbar";
import {HashRouter} from "react-router-dom";


function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <HashRouter>
                <Navbar/>
                <AppRouter/>
            </HashRouter>
        </AuthContext.Provider>
    )
}

export default App;
