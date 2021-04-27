import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'
import './styles.scss';

const AdminMenu = () => (
  <Menu>
    <Menu.Item>
      <Button color='green'  as={Link} to='/admin/orders'>Commandes</Button>
    </Menu.Item>

    <Menu.Item>
      <Button color='green' as={Link} to='/admin/promos'>Codes Promo</Button>
    </Menu.Item>

  </Menu>
);


export default AdminMenu;
