import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import './styles.scss';

const PromoForm = () => (
  <Form className="promo-form">
    <Form.Field>
      <input placeholder='Code' />
    </Form.Field>
    <Form.Field>
      <input placeholder='%' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Date de début' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Date de fin' />
    </Form.Field>
    <Button type='submit' color='green'>Enregistrer le code promo</Button>
  </Form>
)

export default PromoForm;
