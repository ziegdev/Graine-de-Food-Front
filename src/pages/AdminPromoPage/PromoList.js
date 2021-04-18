import React from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

const PromoList = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Code</Table.HeaderCell>
        <Table.HeaderCell>%</Table.HeaderCell>
        <Table.HeaderCell>Date de début</Table.HeaderCell>
        <Table.HeaderCell>Date de fin</Table.HeaderCell>
        <Table.HeaderCell>Modifier</Table.HeaderCell>
        <Table.HeaderCell>Supprimer</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>SUPERPROMO</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>18/04/2021</Table.Cell>
        <Table.Cell>18/04/2022</Table.Cell>
        <Table.Cell>
          <Icon name='pencil alternate' size='large' />
        </Table.Cell>
        <Table.Cell>
          <Icon name='delete' size='large' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>SUPERPROMO</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>18/04/2021</Table.Cell>
        <Table.Cell>18/04/2022</Table.Cell>
        <Table.Cell>
          <Icon name='pencil alternate' size='large' />
        </Table.Cell>
        <Table.Cell>
          <Icon name='delete' size='large' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>SUPERPROMO</Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>18/04/2021</Table.Cell>
        <Table.Cell>18/04/2022</Table.Cell>
        <Table.Cell>
          <Icon name='pencil alternate' size='large' />
        </Table.Cell>
        <Table.Cell>
          <Icon name='delete' size='large' />
        </Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='6'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default PromoList;
