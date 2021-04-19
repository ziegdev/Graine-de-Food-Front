import React from 'react';
import { Table, Input} from 'semantic-ui-react'

const CartResume = ({price}) => (
  <Table basic='very'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Produits </Table.HeaderCell>
        <Table.HeaderCell>Tarifs TTC </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Box Gastronomique - Abonnement 3 mois </Table.Cell>
        <Table.Cell> {price} €</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Dont TVA (20%) </Table.Cell>
        <Table.Cell>4,98 € </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>J'ai un code promo </Table.Cell>
        <Table.Cell> <Input placeholder='Mon Code Promo Ici' /> </Table.Cell>   
      </Table.Row>
      <Table.Row>
        <Table.Cell>Total TTC </Table.Cell>
        <Table.Cell>{price} €</Table.Cell>   
      </Table.Row>
    </Table.Body>
  </Table>
);

export default CartResume;
