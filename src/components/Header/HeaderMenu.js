import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './styles.scss';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: null }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <Menu secondary className="header__navbar">
            <Link to="/concept">
              <Menu.Item
              name='Concept'
              active={activeItem === 'Concept'}
              onClick={this.handleItemClick}
              className="header__navbar__menu__link"
              />
            </Link>
            <Link to="/abonnement">
              <Menu.Item
              name="Je m'abonne"
              active={activeItem === "Je m'abonne"}
              onClick={this.handleItemClick}
              className="header__navbar__menu__link"
              />
            </Link>
            <Link to="/mon-compte">
              <Menu.Item
              name='Mon Compte'
              active={activeItem === 'Mon Compte'}
              onClick={this.handleItemClick}
              className="header__navbar__menu__link"
              />
            </Link>
        </Menu>
      </Router>
    )
  }
}
