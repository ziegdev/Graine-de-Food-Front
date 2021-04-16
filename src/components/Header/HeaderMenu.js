import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import logo from 'src/assets/images/Logo graine de food.png';
import './styles.scss';

export default class MenuExampleSecondary extends Component {
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
            />
            <Menu.Item
            name="Je m'abonne"
            active={activeItem === "Je m'abonne"}
            onClick={this.handleItemClick}
            className="header__navbar__menu__link"
            />
            <Menu.Item
            name='Mon Compte'
            active={activeItem === 'Mon Compte'}
            onClick={this.handleItemClick}
            className="header__navbar__menu__link"
            />
        </Menu>
    )
  }
}