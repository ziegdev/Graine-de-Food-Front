// == Import npm
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LoginPage from 'src/pages/LoginPage';
import UserPage from 'src/pages/UserPage';
import ConceptPage from 'src/pages/ConceptPage';
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
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/mon-compte">
            <UserPage />
          </Route>
          <Route path="/concept">
            <ConceptPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
  </div>
  );
};



// == Export
export default App;
