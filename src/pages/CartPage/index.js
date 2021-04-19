// == Import
import React from 'react';
import './styles.scss';
import { Checkbox, Button, Icon } from 'semantic-ui-react'

import CartResume from 'src/pages/CartPage/CartResume';
import DeliveryFormConfirm from 'src/pages/CartPage/DeliveryFormConfirm';
import NavFormule from 'src/pages/CartPage/NavFormule';

// == Composant
const CartPage = () => (
    <div className="cartpage">
      <h1 className="cartpage__header" >Récapitulatif de Votre Commande </h1>
      <NavFormule />
      <DeliveryFormConfirm />
      <Checkbox className="checkboxCGV" label="J'ai lu et j'accepte les conditions générales de vente" />
      <div className="cartpage__button"> 
        <Button icon labelPosition='right'>
        Paiement
        <Icon name='paypal' />
        </Button> 
     </div>
</div>
  );

export default CartPage