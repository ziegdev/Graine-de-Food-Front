// == Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
<<<<<<< HEAD
import { Checkbox, Button } from 'semantic-ui-react'

import CartResume from 'src/containers/CartResume';
import DeliveryFormConfirm from 'src/containers/DeliveryFormConfirm';
import NavFormule from 'src/containers/NavFormuleCart';
=======
import { Checkbox, Button, Icon } from 'semantic-ui-react'
import CartResume from 'src/pages/CartPage/CartResume';
import ModalPaiement from './ModalPaiement'
import DeliveryFormConfirm from 'src/pages/CartPage/DeliveryFormConfirm';
import NavFormule from 'src/pages/CartPage/NavFormule';
>>>>>>> 7e41e99442b26eebe2cd65ef7dfd786ae9c3d952

// Stripe imports
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IkqSgJg8u3w3UyQntWZjxo4SdYN3JED4UhzDX0bedWSxBBpPIET2xBUtrMcfcOx1fpg5ZOJxv04gZ4UjOPJZaym00oQYQhsdE');

// == Composant
const CartPage = () => (
    <div className="cartpage">
      <h1 className="cartpage__header" >Récapitulatif de Votre Commande </h1>
      <NavFormule />
      <DeliveryFormConfirm />
      <Checkbox className="checkboxCGV" label="J'ai lu et j'accepte les conditions générales de vente" />
      <div className="cartpage__button"> 

    <Elements stripe={stripePromise}>
      <ModalPaiement/>
    </Elements>


    <Link to="/abonnement/commande-validee">         
    <Button icon labelPosition='right'>
        Paiement
        </Button> 
</Link>
     </div>
</div>
  );

export default CartPage
