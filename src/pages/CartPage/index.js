// == Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Form } from 'semantic-ui-react'
import DeliveryFormConfirm from 'src/containers/DeliveryFormConfirm';
import NavFormule from 'src/containers/NavFormuleCart';

// == Composant
const CartPage = () => {

  return (
    <div className="cartpage">
      <h1 className="cartpage__header" >Récapitulatif de Votre Commande </h1>
      <a className='button-link' href='/abonnement'><button>Changer de formule</button></a>
      <NavFormule />
      <DeliveryFormConfirm />
      <Form className="padding-top">
        <Form.Checkbox className="checkboxCGV" label="J'ai lu et j'accepte les conditions générales de vente" required/>
        <div className="cartpage__button"> 
          <Link to="/abonnement/commande-validee">         
            <button type="submit">
              Paiement
            </button> 
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default CartPage
