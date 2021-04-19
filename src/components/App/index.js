// == Import npm
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LoginPage from 'src/pages/LoginPage';
import UserPage from 'src/pages/UserPage';
import ConceptPageSev from 'src/pages/ConceptPageSev';
import HomePage from 'src/pages/HomePage';
import Subscribe from 'src/pages/SubscribePage';
import CartPage from 'src/pages/CartPage';
import PaymentConfirm from 'src/pages/PaymentConfirm';
import LegalNotice from 'src/pages/LegalNotice';
import CGV from 'src/pages/CGV';
import ContactPage from 'src/pages/ContactPage';
import AdminOrderPage from 'src/pages/AdminOrderPage';
import AdminPromoPage from 'src/pages/AdminPromoPage';
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

        <Switch>  
        <Route path="/" exact>
            <HomePage />
        </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/mon-compte">
            <UserPage />
          </Route>
          <Route 
            path="/concept"
            component={ConceptPageSev}>
          </Route>
      
        <Route path="/abonnement" >
            <Subscribe />
        </Route>
        <Route path="/abonnement/paiement" >
            <CartPage />
        </Route>
        <Route path="/abonnement/commande-validee" >
            <PaymentConfirm />
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
        <Route path="/admin/orders" >
            <AdminOrderPage />
        </Route>
        <Route path="/admin/promos" >
            <AdminPromoPage />
        </Route>
        </Switch>

      <Footer />
  </div>
  );
};



// == Export
export default App;
