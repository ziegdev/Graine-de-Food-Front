import React from 'react';
import './styles.scss';
import AdminMenu from 'src/containers/AdminMenu';
import PromoList from './PromoList';
import PromoForm from './PromoForm';

const AdminPromoPage = () => (
  <div className='container'>
    <AdminMenu />
    <h1>Code Promo</h1>
    <h2>Liste des codes promo enregistrés</h2>
    <PromoList />
    <h2>Nouveau code promo</h2>
    <PromoForm />
  </div>
);

export default AdminPromoPage;
