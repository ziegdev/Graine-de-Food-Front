// == Import npm
import React, { useEffect } from 'react';

// == Import
<<<<<<< HEAD
import reactLogo from './react-logo.svg';
import './styles.css';
import Test from 'src/components/test';
import api from '/src/api';
=======
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import api from 'src/api';
>>>>>>> 4e5004852f9f438915c5921bd4f9c0a61acc00b6

// == Composant
const App = () => {
useEffect(() => {
    // window.scrollTo(0, 0);
    // const { slug } = match.params;
    api.get('/')
      .then((result) => console.log('result:', result.data))
      .finally(() => {
      });
    // return () => {
    //   setLoadingState(true);
    //   setRecipeData(null);
    // };3000
  },[]);
  return (
    <div className="app">
      <Header />
      <Footer />
  </div>
  );
};



// == Export
export default App;
