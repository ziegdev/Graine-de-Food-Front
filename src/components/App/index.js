// == Import npm
import React, { useEffect } from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
import Test from 'src/components/test';
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
    // };
  },[]);
  return (
    <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <Test />
  </div>
  );
};



// == Export
export default App;
