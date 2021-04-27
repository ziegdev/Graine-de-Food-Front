// == Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Checkbox, Button, Icon } from 'semantic-ui-react'
import CartResume from 'src/pages/CartPage/CartResume';
import DeliveryFormConfirm from 'src/pages/CartPage/DeliveryFormConfirm';
import NavFormule from 'src/pages/CartPage/NavFormule';

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
<CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
</Elements> 


    <Link to="/abonnement/commande-validee">         
    <Button icon labelPosition='right'>
        Paiement
        <Icon name='paypal' />
        </Button> 
</Link>
     </div>
</div>
  );

export default CartPage
