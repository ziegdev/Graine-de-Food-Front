// == Import npm
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import {
    logged
} from 'src/actions/user';


// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LoginPage from 'src/containers/LoginPage';
import UserPage from 'src/pages/UserPage';
import ConceptPageSev from 'src/pages/ConceptPageSev';
import HomePage from 'src/pages/HomePage';
import Subscribe from 'src/containers/SubscribePage';
import CartPage from 'src/pages/CartPage';
import PaymentConfirm from 'src/pages/PaymentConfirm';
import LegalNotice from 'src/pages/LegalNotice';
import CGV from 'src/pages/CGV';
import ContactPage from 'src/pages/ContactPage';
import AdminOrderPage from 'src/pages/AdminOrderPage';
import AdminPromoPage from 'src/containers/AdminPromoPage';
import api from 'src/api';


// == Composant
const App = ({logged, role}) => {
  return (
    <div className="app">  
      <Header />

        <Switch>  
        <Route path="/" exact>
            <HomePage />
        </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route 
          path="/mon-compte"
          >
            <UserPage />
          </Route>
          <Route 
            path="/concept"
            component={ConceptPageSev}>
          </Route>
      
        <Route path="/abonnement" exact>
            <Subscribe />
        </Route>

        <Route path="/mentions-legales" >
            <LegalNotice />
        </Route>
        <Route path="/cgv" >
            <CGV />
        </Route>
        <Route path="/contact" >
            <ContactPage />
        </Route>

        {logged ? (
        <Route path="/abonnement/paiement" >
            <CartPage />
        </Route>
        ) : (
          <Redirect to='/login' />
        )}

        {logged ? (
        <Route path="/abonnement/commande-validee" >
          <PaymentConfirm />
        </Route>
        ) : (
          <Redirect to='/login' />
        )}

        {logged && role==='admin' && (
        <Route path="/admin/orders" >
            <AdminOrderPage />
        </Route>)}
        {logged && role==='admin' && (
        <Route path="/admin/promos" >
            <AdminPromoPage />
        </Route>)}
        </Switch>

      <Footer />
  </div>
  );
};



// == Export
  export default App;
