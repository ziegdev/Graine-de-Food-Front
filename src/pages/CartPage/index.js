// == Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Checkbox, Button } from 'semantic-ui-react'

import CartResume from 'src/containers/CartResume';
import DeliveryFormConfirm from 'src/containers/DeliveryFormConfirm';
import NavFormule from 'src/containers/NavFormuleCart';

// == Composant
const CartPage = () => (
    <div className="cartpage">
      <h1 className="cartpage__header" >Récapitulatif de Votre Commande </h1>
      <NavFormule />
      <DeliveryFormConfirm />
      <Checkbox className="checkboxCGV" label="J'ai lu et j'accepte les conditions générales de vente" />
      <div className="cartpage__button"> 
    <Link to="/abonnement/commande-validee">         
    <Button icon labelPosition='right'>
        Paiement
        </Button> 
</Link>
     </div>
</div>
  );

export default CartPage
