import React, {useState} from 'react';
import { Table, Input, Form} from 'semantic-ui-react'
import api from 'src/api';

const CartResume = ({price}) => {

const [promoCode, setPromoCode] = useState('')
const [pourcent, setPourcent] = useState(0)
const addPromoCode = (e) => {
e.preventDefault();
api.get(`/promo/${promoCode}`)
    .then((response) => response.data.promo)
      .then((data) => setPourcent(data.pourcent))
      .catch((error) => console.error(error))
    };

const newPourcent = parseInt(pourcent, 10)
const newPrice = parseInt(price, 10)
const finalPrice =(newPrice * ((100-newPourcent)/100)).toFixed(2)


return(
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
        <Table.Cell> 
          <Form onSubmit={addPromoCode}>
            <Input placeholder='Mon Code Promo Ici' value={promoCode} onChange={(e) => setPromoCode(e.target.value)} /> 
          </Form>
        </Table.Cell>   
      </Table.Row>
      <Table.Row>
        <Table.Cell>Total TTC </Table.Cell>
        <Table.Cell>{finalPrice} €</Table.Cell>   
      </Table.Row>
    </Table.Body>
  </Table>
);
}
export default CartResume;
