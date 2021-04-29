import React, { useState } from 'react';
import StripeContainer from 'src/pages/CartPage/TestPayement/StripeContainer/StripeContainer';

const TestPayement = () => {
    const [showItem, setShowItem] = useState(false)
    return (
      <>
        <h1>The Spatula Store</h1>
        {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> 
        <button onClick={() => setShowItem(true)}>Purchase Spatula</button></>}
      </>
    );
  }

export default TestPayement;
