import React from 'react';
import { Icon, Button, Menu } from 'semantic-ui-react'
import './styles.scss';
import exportFromJSON from 'export-from-json'

const Options = ({ usersData }) => {

const data =[]
usersData.map((user) => ( data.push(user)))

const fileName = 'download'
const exportType = 'csv'

const exportData = () => {

exportFromJSON({ data, fileName, exportType })
}

return (
  <Menu className='orders-menu'>
    <Menu.Item>
      <Icon name='external alternate' size='large' />
      <Button color='red' onClick={exportData}>Exporter les données</Button>
    </Menu.Item>
  </Menu>
);
}

export default Options;
