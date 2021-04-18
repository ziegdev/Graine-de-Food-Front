import React from 'react';
import './styles.scss';
import AdminMenu from 'src/components/AdminMenu';
import Options from './Options';
import OrdersTable from './OrdersTable';

const AdminOrderPage = () => (
  <div className='container'>
    <AdminMenu />
    <h1>Commandes</h1>
    <Options />
    <OrdersTable />
  </div>
);

export default AdminOrderPage;
