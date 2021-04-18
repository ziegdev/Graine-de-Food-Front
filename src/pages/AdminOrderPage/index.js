import React from 'react';
import './styles.scss';
import AdminMenu from 'src/components/AdminMenu';
import Options from './Options';

const AdminOrderPage = () => (
  <div className='container'>
    <AdminMenu />
    <h1>Commandes</h1>
    <Options />
    <div>Tableau</div>
  </div>
);

export default AdminOrderPage;
