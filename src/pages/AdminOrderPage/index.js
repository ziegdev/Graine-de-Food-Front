import React from 'react';
import './styles.scss';
import AdminMenu from 'src/components/AdminMenu';

const AdminOrderPage = () => (
  <div className='container'>
    <AdminMenu />
    <h1>Commandes</h1>
    <div>Filtres et Export</div>
    <div>Tableau</div>
  </div>
);

export default AdminOrderPage;
