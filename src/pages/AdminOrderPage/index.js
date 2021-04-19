import React, { useEffect, useState } from 'react';
import './styles.scss';
import AdminMenu from 'src/components/AdminMenu';
import Options from './Options';
import OrdersTable from './OrdersTable';
import api from 'src/api';

const AdminOrderPage = () => {
const [ users, setUsers ] = useState(users)

  useEffect(() => {
    api.get('/users')
      .then((users) => setUsers(users))
      .finally(() => { 
      });
  },[]);

console.log("state User : ", users.result)

return (
  <div className='container'>
    <AdminMenu />
    <h1>Commandes</h1>
    <Options />
    <OrdersTable />
  </div>
)};

export default AdminOrderPage;

