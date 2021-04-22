import React, { useEffect, useState } from 'react';
import './styles.scss';
import AdminMenu from 'src/components/AdminMenu';
import PromoList from 'src/containers/AdminPromoPage/PromoList.js';
import PromoForm from 'src/containers/AdminPromoPage/PromoForm.js';
import PromoFormModify from 'src/containers/AdminPromoPage/PromoFormModify.js';
import api from 'src/api';

const AdminPromoPage = ({
  promoCode,
  promoPourcent,
  promoStartDate,
  promoEndDate
}) => {
const [ promosData, setPromos ] = useState([])

const promoToModify = {
  promoCode,
  promoPourcent,
  promoStartDate,
  promoEndDate}

  useEffect(() => {  
    api.get('/promos')
    .then((response) => response.data.promos)
      .then((data) => setPromos(data))
      .catch((error) => console.error(error))
    },[]);

  return (<div className='container'>
    <AdminMenu />
    <h1>Code Promo</h1>
    <h2>Liste des codes promo enregistrés</h2>
    <PromoList promosData={promosData} />
    <h2>Nouveau code promo</h2>
    <PromoForm />
    <h2>Modification de code promo</h2>
    <PromoFormModify newPromo2={promoToModify} />
  </div>)
};

export default AdminPromoPage;
