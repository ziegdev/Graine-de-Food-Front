import api from 'src/api'
import {
    SUBMIT_SIGNUP,
    setNewUserFromApi,
} from 'src/actions/register';

import {
    logged
} from 'src/actions/user'

export default (store) => (next) => (action) => {
 switch (action.type) {
     case SUBMIT_SIGNUP: {
         const { emailSignup, passwordSignup, lastnameSignup, firstnameSignup, invoiceAddressSignup, invoicePostCodeSignup, invoiceCitySignup, deliveryAddressSignup, deliveryPostCodeSignup, deliveryCitySignup  } = store.getState();
        api.post('/signup', {
           email: emailSignup,
           password: passwordSignup,
           last_name: lastnameSignup,
           first_name: firstnameSignup,
           invoice_address: invoiceAddressSignup,
           invoice_postcode: invoicePostCodeSignup,
           invoice_city: invoiceCitySignup,
           delivery_address: deliveryAddressSignup,  
           delivery_postcode: deliveryPostCodeSignup,
           delivery_city: deliveryCitySignup


        }).catch((err)=> console.log('error: ', err)
        )
            .then(result => store.dispatch(setNewUserFromApi(result.data.user.email, result.data.user.password, result.data.user.first_name, result.data.user.last_name, result.data.user.invoice_address, result.data.user.invoice_postcode, result.data.user.invoice_city, result.data.user.delivery_address, result.data.user.delivery_postcode, result.data.user.delivery_city, result.data.user.id, result.data.user.status, result.data.user.points, result.data.user.role, result.data.user.vegan, )))
            .finally(() => {
           store.dispatch(logged())
       })
 return next(action);
}
default:
return next(action);
 }
};