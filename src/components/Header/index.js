import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from 'src/assets/images/Logo_grainedefood.png';
import HeaderMenu from './HeaderMenu'

import './styles.scss';

const Header = () => {
    return (
   
        <div className="header">
            <div className="header__logo">
                <Link to='/'>
                <img className="header__logo__img" src={logo} alt="logo de Grainedefood" ></img>
                </Link>
            </div>
            <HeaderMenu />
        </div>

    );
};

export default Header;
