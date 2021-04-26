import React from 'react';
import {Redirect} from 'react-router-dom'
import api from 'src/api'
import {
    SUBMIT_LOGIN,
    setUserFromApi,
    logged,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
 switch (action.type) {
     case SUBMIT_LOGIN: {
         const { emailSignin, passwordSignin } = store.getState();
        api.post('/login', {
           email: emailSignin,
           password: passwordSignin,
        }).catch((err)=> alert("Données saisies non reconnues, merci d'essayer à nouveau ou créer un nouveau compte")
        )            
            .then(result => store.dispatch(setUserFromApi(
                result.data.user.email, 
                result.data.user.password, 
                result.data.user.last_name, 
                result.data.user.first_name, 
                result.data.user.invoice_address,
                result.data.user.invoice_postcode,
                result.data.user.invoice_city,
                result.data.user.delivery_address,
                result.data.user.delivery_postcode,
                result.data.user.delivery_city,
                result.data.user.vegan,
                result.data.user.id,
                )))

            .then(() => {
                store.dispatch(logged())
            })

 return next(action);
}
default:
return next(action);
 }
};
