import React from 'react';
import { Table } from 'semantic-ui-react'
import './styles.scss';

const OrdersTable = ({ usersData }) => {
  return (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Nom</Table.HeaderCell>
        <Table.HeaderCell>Prénom</Table.HeaderCell>
        <Table.HeaderCell>Adresse</Table.HeaderCell>
        <Table.HeaderCell>Code Postal</Table.HeaderCell>
        <Table.HeaderCell>Ville</Table.HeaderCell>
        <Table.HeaderCell>Date d'abonnement</Table.HeaderCell>
        <Table.HeaderCell>Durée d'abonnement</Table.HeaderCell>
      </Table.Row>
    </Table.Header>


    <Table.Body>
    {usersData.map((user) => (
    <Table.Row key={user.id}>
      <Table.Cell>{user.status ? 'Actif' : 'Inactif'}</Table.Cell>
      <Table.Cell>{user.last_name}</Table.Cell>
      <Table.Cell>{user.first_name}</Table.Cell>
      <Table.Cell>{user.delivery_address}</Table.Cell>
      <Table.Cell>{user.delivery_postcode}</Table.Cell>
      <Table.Cell>{user.delivery_city}</Table.Cell>
      <Table.Cell>18/04/2021</Table.Cell>
      <Table.Cell>3 mois</Table.Cell>
    </Table.Row>
    ))}
       </Table.Body>
  </Table>
  )
  }

export default OrdersTable;
