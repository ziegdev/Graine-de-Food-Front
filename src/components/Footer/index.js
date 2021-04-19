import React from 'react';
import logo from 'src/assets/images/Logo_grainedefood.png';
import './styles.scss';
import FooterMenu from './FooterMenu'
import SocialMenu from './SocialMenu'
import LegalText from './LegalText'
const Footer = () => {
    return (
    <div className="footer">
        <FooterMenu /> 
        <SocialMenu />
        <LegalText />
    </div>
    );
};

export default Footer;
