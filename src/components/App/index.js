// == Import npm
import React, { useEffect } from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Homepage from 'src/pages/HomePage';
import api from 'src/api';

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
