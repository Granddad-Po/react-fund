import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={'navbar'}>
            <div>
                <Link className={'navbar__links'} to="/posts">Посты</Link>
                <Link className={'navbar__links'} to="/about">О сайте</Link>
            </div>
            <MyButton
                style={{marginRight: 15, color: 'white', border: '1px solid white', textTransform: 'uppercase', fontWeight: 'bold'}}
                onClick={logout}>Выйти</MyButton>
        </div>
    );
};

export default Navbar;