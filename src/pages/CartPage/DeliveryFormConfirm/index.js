import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Checkbox, Icon } from 'semantic-ui-react'
import './styles.scss';

const DeliveryFormConfirm = () => (
 <div className="deliveryFormConfirm">
  
 <Segment raised>
  <div href="#" className="deliveryFormConfirm__modifier">
    <h3> Livraison Prévue à l'adresse suivante:  </h3>
    <Link to="/mon-compte"> <div> Modifier  <Icon name='pen square' /> </div> </Link>
  </div>
  <div className="deliveryFormConfirm__modifier__adress">
    <p> Jean-Marc Débutte </p>
    <p> 5 rue de la République </p>
    <p>12 344 Paris </p>
    <Checkbox label='Je suis vegan' />
  </div>
</Segment>
</div>
);

export default DeliveryFormConfirm;
