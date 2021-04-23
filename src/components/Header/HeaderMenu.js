import React, { Component } from 'react'
import {  NavLink, Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import ReactDom from 'react-dom';
import './styles.scss';


import LoginPage from '../../pages/LoginPage';

const HeaderMenu = ({ logged }) => {
  return (
 
      <Menu secondary className="header__navbar">
            
            <Menu.Item
            
            name='Concept'
            className="header__navbar__menu__link"
            type='button' 
            as={NavLink} 
            to='/concept'
            >Concept</Menu.Item>

         
            <Menu.Item
            name="Je m'abonne"
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/abonnement'
            >Je m'abonne</Menu.Item>
  
            
            {logged ? ( 
              <>
            <Menu.Item
            name='Mon Compte'
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/mon-compte'
            >Mon Compte </Menu.Item> 

            <Menu.Item
            name='Déconnexion'
            className="header__navbar__menu__link"
            type='button' 
            as={NavLink} 
            to='/'
            exact
            >Se déconnecter</Menu.Item>
            </>) : (
            <Menu.Item
            name='Connexion'
            className="header__navbar__menu__link"
            type='button' 
            as={NavLink} 
            to='/login'
            >Se connecter</Menu.Item>

            )
            } 

      </Menu>

  )

};

export default HeaderMenu;

