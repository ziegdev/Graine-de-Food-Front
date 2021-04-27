import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'
import './styles.scss';

const AdminMenu = ({logout}) => {

  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push('/');
  }

  return (
  <Menu>
    <Menu.Item>
      <Button color='green'  as={Link} to='/admin/orders'>Commandes</Button>
    </Menu.Item>

    <Menu.Item>
      <Button color='green' as={Link} to='/admin/promos'>Codes Promo</Button>
    </Menu.Item>


    <Menu.Item>
      <Button 
        color='black'
        onClick={handleLogout}
        >Se déconnecter
      </Button>
    </Menu.Item>

  </Menu>
  )
};


export default AdminMenu;
