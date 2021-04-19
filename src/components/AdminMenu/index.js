import React from 'react';
import { Button, Menu } from 'semantic-ui-react'
import './styles.scss';

const AdminMenu = () => (
  <Menu>
    <Menu.Item>
      <Button color='green'>Commandes</Button>
    </Menu.Item>

    <Menu.Item>
      <Button color='green'>Codes Promo</Button>
    </Menu.Item>

    <Menu.Item>
      <Button color='black'>Se déconnecter</Button>
    </Menu.Item>
  </Menu>
);


export default AdminMenu;
