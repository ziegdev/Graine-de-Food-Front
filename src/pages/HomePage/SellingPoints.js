import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import './styles.scss';

const SellingPoints = () => (
  <>
    <h2>Comment ça marche, Graine de Food?</h2>
    <div className="homepage__selling-points">
      <div className="centered homepage__selling-points--item">
        <Icon name='computer' size='huge' />
        <h3>Je m'abonne</h3>
        <p>Je choisis ma formule<br/>1 mois, 3 mois ou 6 mois</p>
      </div>
      <div className="centered homepage__selling-points--item">
        <Icon name='box' size='huge' />
        <h3>Je reçois ma box</h3>
        <p>Directement à la maison<br/>en début de mois</p>
      </div>
      <div className="centered homepage__selling-points--item">
        <Icon name='food' size='huge' />
        <h3>Je déguste</h3>
        <p>Je découvre des produits français de qualité</p>
      </div>
    </div>
    <Button size='huge' color='green' centered>Je m'abonne à la box Graine de Food</Button>
  </>
);

export default SellingPoints;
