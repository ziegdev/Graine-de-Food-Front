import React from 'react';
import { Icon, Button, Menu } from 'semantic-ui-react'
import './styles.scss';

const Options = () => (
  <Menu className='orders-menu'>
    <Menu.Item>
      <Icon name='filter' />
    </Menu.Item>

    <Menu.Item name='status' >
      Status
    </Menu.Item>

    <Menu.Item name='ville' >
      Ville
    </Menu.Item>

    <Menu.Item>
      <Icon name='external alternate' size='large' />
      <Button color='red'>Exporter les données</Button>
    </Menu.Item>
  </Menu>
);


export default Options;
