import React, { useState } from 'react';
import StripeContainer from 'src/pages/CartPage/TestPayement/StripeContainer/StripeContainer';

const TestPayement = ({selectedSubPrice, selectedSubMonth, finalPrice}) => {
    const [showItem, setShowItem] = useState(false)
    return (
      <>
        <h1>Abonnement GrainedeFood - {selectedSubMonth}</h1>
        {showItem ? <StripeContainer/> : <> <h3>{finalPrice}€</h3> 
        <button onClick={() => setShowItem(true)}>Payer</button></>}
      </>
    );
  }

export default TestPayement;
