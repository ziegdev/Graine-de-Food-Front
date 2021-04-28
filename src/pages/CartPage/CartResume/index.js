import React, {useState} from 'react';
import { Table, Input, Form} from 'semantic-ui-react'
import api from 'src/api';

const CartResume = ({price, selectedSubMonth, selectedSubPrice}) => {

const [promoCode, setPromoCode] = useState('')
const [pourcent, setPourcent] = useState(0)



 const handleOnChange = (e) => {
  if(e.target.value) {
    setPromoCode(e.target.value)
  }else {
    setPourcent(0)
    setPromoCode('')
  }
}
const addPromoCode = (e) => {

  e.preventDefault();
  api.get(`/promo/${promoCode}`)
      .then((response) => response.data.promo)
        .then((data) => setPourcent(data.pourcent))
        .catch((error) => alert("ce code n'existe pas à ou plus"))
  if(!pourcent){
    setPourcent(0);
  }
  };


const newPourcent = parseInt(pourcent, 10)
const newPrice = parseInt(selectedSubPrice, 10)
const TVA = Number(((newPrice * 20) / 100).toFixed(2))
const finalPrice =(newPrice * ((100-newPourcent)/100) + TVA).toFixed(2)



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
        <Table.Cell>Box Gastronomique - Abonnement  {selectedSubMonth} </Table.Cell>
        <Table.Cell> {selectedSubPrice} €</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Dont TVA (20%) </Table.Cell>
        <Table.Cell>{TVA} € </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>J'ai un code promo </Table.Cell>
        <Table.Cell> 

          <Form onSubmit={addPromoCode}>

            <Input placeholder='Mon Code Promo Ici' value={promoCode} onChange={handleOnChange} /> 
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
