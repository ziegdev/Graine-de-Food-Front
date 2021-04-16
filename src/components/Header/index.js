import React from 'react';
import logo from 'src/assets/images/Logo graine de food.png';
import HeaderMenu from './HeaderMenu';
import './styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__logo__img" src={logo} alt="logo de Grainedefood"></img>
            </div>
            <HeaderMenu />
        </div>
    );
};

export default Header;
