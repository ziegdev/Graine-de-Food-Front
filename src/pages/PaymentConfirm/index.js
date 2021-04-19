import React from 'react'
import {   Link } from 'react-router-dom';
import logo from 'src/assets/images/Logo_grainedefood.png';
import './styles.scss';
import { Button } from 'semantic-ui-react'

const PaymentConfirm = () => (
  <div className="paymentConfirm">
    <h1 className="paymentConfirm__header" >Merci de Votre Commande</h1>
    <p>Vous allez recevoir par email une confirmation</p>
    <p>Bonne dégustation ! </p>
    <p>L'équipe Graine de Food </p> 
     <div className="paymentConfirm__logo">
                <img className="header__logo__img" src={logo} alt="logo de Grainedefood"></img>
    </div>
    <Button as={Link} to='/'><div>Retour à l'accueil</div></Button>
  </div>
)

export default PaymentConfirm
