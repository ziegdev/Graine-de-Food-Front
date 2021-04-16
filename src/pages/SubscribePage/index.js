import React from 'react';
import MainPic from 'src/pages/SubscribePage/MainPic';
//import TexteFormule from 'src/pages/SubscribePage/TexteFormule';
import Button from 'src/pages/SubscribePage/Button';
import NavFormule from 'src/pages/SubscribePage/NavFormule';
import Price from 'src/pages/SubscribePage/Price';

const Subscribe = () => {
    return (
    <div className="subscribe">
      <MainPic />
      <NavFormule />
      <Price />
      <Button />
    </div>
    );
};


export default Subscribe;
