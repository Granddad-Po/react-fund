import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link className={'navbar__links'} to="/posts">Посты</Link>
            <Link className={'navbar__links'} to="/about">О сайте</Link>
        </div>
    );
};

export default Navbar;