import React, { Component } from 'react'
import {  NavLink, Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './styles.scss';

export default class HeaderMenu extends Component {
  state = { activeItem: null }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

render() {
    const { activeItem } = this.state

    return (

        <Menu secondary className="header__navbar">
            
              <Menu.Item
              
              name='Concept'
              active={activeItem === 'Concept'}
              onClick={this.handleItemClick}
              className="header__navbar__menu__link"
              type='button' 
              as={NavLink} 
              to='/concept'
              >Concept</Menu.Item>

           
              <Menu.Item
              name="Je m'abonne"
              active={activeItem === "Je m'abonne"}
              onClick={this.handleItemClick}
              className="header__navbar__menu__link"
              as={NavLink} 
              to='/abonnement'
              >Je m'abonne</Menu.Item>
     
      
              <Menu.Item
              name='Mon Compte'
              active={activeItem === 'Mon Compte'}
              onClick={this.handleItemClick}
              className="header__navbar__menu__link"
              as={NavLink} 
              to='/login'
              >Mon Compte </Menu.Item>

        </Menu>

    )
  }
}
